export const metadata = {
  title: 'Contact - Stellar',
  description: 'Page description',
}
import Head from 'next/head';
import Link from 'next/link'
import AuthLogo from './auth-logo'
import BookMeetingInlineWidget from './calendly';

export default function SignUp() {
  
  return (
    <>
    
      {/* Page header */}
      <div className="max-w-3xl  gap-2 items-start mx-auto text-center ">
        {/* Logo */}
        <AuthLogo />
        {/* Page title */}
        <h1 className="h2 bg-clip-text text-transparent font-bold bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 capitalize">Let's talk about <strong>YOUR</strong> project</h1>
      </div>

      {/* Form */}
      <div className="w-full">
      
      <BookMeetingInlineWidget
        calendly={{
          url: "https://calendly.com/troisiemeoeildigital/30min?hide_event_type_details=1&hide_gdpr_banner=1"
        }}
      />

      </div>
    </>
  )
}
