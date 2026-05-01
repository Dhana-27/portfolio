import React from 'react'
import { siteConfig } from '@/config/site'

export function NowPlayingCard() {
  if (!siteConfig.spotify?.enabled) return null

  // Extracts the playlist ID from your URL
  const playlistId = siteConfig.spotify.playlistUrl.split('playlist/')[1]?.split('?')[0]

  return (
    <div className="flex h-full w-full flex-col p-4">
      <h3 className="mb-2 text-lg font-bold">My Playlist</h3>
      <iframe
        src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-xl shadow-lg"
      ></iframe>
    </div>
  )
}