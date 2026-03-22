# Improve personal website: meta tags, cleanup, dedup

## Context

The Bun migration is complete. Now cleaning up leftovers and improving how the site presents when shared on social media. Four improvements selected by the user.

## Files to modify

- `index.html` - Add OG/Twitter meta tags, theme-color, remove duplicate GitHub button
- `server.ts` - Remove `/api/page-1` route
- `server.test.ts` - Remove the test for the deleted endpoint

## Steps

### 1. Add Open Graph & Twitter Card meta tags to `index.html`

Add after the existing `<meta name="Description">` tag:

```html
<meta property="og:type" content="website" />
<meta property="og:title" content="Giacomo Rebonato" />
<meta property="og:description" content="Programmer and musician based between Dublin and Bologna. Passionate about React, TypeScript, Claude Code, MCP Servers, and AI-assisted development." />
<meta property="og:url" content="https://www.giacomorebonato.com" />
<meta property="og:image" content="https://www.giacomorebonato.com/logo.webp" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Giacomo Rebonato" />
<meta name="twitter:description" content="Programmer and musician based between Dublin and Bologna." />
```

Also update the `<meta name="Description">` content to mention AI skills.

### 2. Add `<meta name="theme-color">` to `index.html`

Add in `<head>`:

```html
<meta name="theme-color" content="#1d232a" />
```

(`#1d232a` is DaisyUI dark theme's base-200 color, matching the page background.)

### 3. Remove duplicate GitHub button from header

Remove the "View on GitHub" button + its surrounding `<div>` (lines 39-50) from the header section. GitHub is already in the Contacts section at the bottom.

### 4. Remove `/api/page-1` from `server.ts`

Remove the route from the `routes` object so it becomes just:

```ts
routes: {
    '/': homepage,
},
```

### 5. Update `server.test.ts`

Remove or replace the test for the deleted endpoint. Replace with a simple test that the homepage returns 200:

```ts
test('GET / returns homepage', async () => {
    const response = await fetch(`${server.url}`)
    expect(response.status).toBe(200)
})
```

## Verification

1. `bun test` - homepage test passes
2. `bun run dev` - site loads, no GitHub button duplication, browser tab shows dark theme-color
3. Inspect `<head>` in Chrome DevTools - OG and Twitter meta tags present
4. Test with a social media link preview tool (e.g. paste URL in a Slack/Discord chat) to verify OG tags render
