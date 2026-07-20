# Games of Faith

An installable mobile-first PWA for multiplayer Bible formation games. The application contains eight game worlds, a shared Discover → Reflect → Respond loop, device-local player profiles, and ten selectable avatars.

## Run locally

```bash
npm install
npm run dev
```

## Validate

```bash
npm run test
npm run build
```

## Player identity

On first visit, every player must enter a first name or nickname and choose an avatar. The identity is stored locally under `gof-player-v1` and reused in the header, profile and all games. Players can change it from the Profile screen.

## Current architecture boundary

This repository implements the complete client-side PWA. Production cross-device rooms, accounts, real-time synchronization, moderation and persistent leader-managed content require a backend service.
