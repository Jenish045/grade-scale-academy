import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, phone, email, city, destination, message } = data

    // 1. Basic validation Vows
    if (!name || !phone || !email || !city || !destination) {
      return NextResponse.json(
        { error: "All required fields (Name, Phone, Email, City, Destination) must be filled." },
        { status: 400 }
      )
    }

    const timestamp = new Date().toISOString()

    // 2. Google Sheets Apps Script Webhook Sync
    const googleWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL
    if (googleWebhookUrl) {
      try {
        await fetch(googleWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            city,
            destination,
            message: message || "",
            timestamp
          }),
        })
      } catch (sheetErr) {
        console.error("Google Sheets Sync Error:", sheetErr)
        // Keep executing; do not fail the request if Google Sheets fails
      }
    }

    // 3. Resend Email Lead Notification
    const resendApiKey = process.env.RESEND_API_KEY
    const businessEmail = process.env.BUSINESS_EMAIL || "info@gradescaleacademy.com"
    
    if (resendApiKey) {
      try {
        const emailHtml = `
          <h2>New Consultation Request</h2>
          <p><strong>Timestamp:</strong> ${timestamp}</p>
          <p><strong>Full Name:</strong> ${name}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Email Address:</strong> ${email}</p>
          <p><strong>Current City:</strong> ${city}</p>
          <p><strong>Preferred Destination:</strong> ${destination}</p>
          <p><strong>Additional Message:</strong> ${message || "N/A"}</p>
        `

        // Call Resend REST API
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "GSA Consultation Leads <onboarding@resend.dev>",
            to: [businessEmail],
            subject: `New Lead: ${name} (${destination})`,
            html: emailHtml,
          }),
        })
      } catch (emailErr) {
        console.error("Resend Email Sync Error:", emailErr)
        // Keep executing; do not fail the request if Resend fails
      }
    } else {
      console.warn("RESEND_API_KEY not configured. Skipping lead email notification.")
    }

    return NextResponse.json({ status: "success", timestamp })
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal Server Error occurred while processing consultation booking."
    console.error("API Consultation Route Error:", err)
    return NextResponse.json(
      { error: errorMsg },
      { status: 500 }
    )
  }
}
