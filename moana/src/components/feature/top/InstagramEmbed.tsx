'use client'

import { useEffect } from 'react'

export default function InstagramEmbed() {
  useEffect(() => {
    const scriptId = 'EmbedSocialHashtagScript'
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.src = 'https://embedsocial.com/cdn/ht.js'
      document.head.appendChild(script)
    }

    return () => {
      // Cleanup: Remove the script when the component unmounts
      const scriptElement = document.getElementById(scriptId)
      if (scriptElement) {
        document.head.removeChild(scriptElement)
      }
    }
  }, [])

  return (
    <>
      <div
        className="embedsocial-hashtag"
        data-ref="4cb929ebb9d7da904b7e6be8547586d7f5217160"
      >
        <a
          className="feed-powered-by-es feed-powered-by-es-feed-img es-widget-branding"
          href="https://embedsocial.jp/"
          target="_blank"
          rel="noopener noreferrer"
          title="EmbedSocialで作成しました"
        >
          <img
            src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp"
            alt="EmbedSocial"
          />
          <div className="es-widget-branding-text">
            EmbedSocialで作成しました
          </div>
        </a>
      </div>
    </>
  )
}
