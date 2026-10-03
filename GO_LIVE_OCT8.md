# Go-live checklist — Autumn Deals collection (Oct 8, 2026)

**Do NOT run these steps before Oct 8.** Everything below assumes the
morning daily update cron has already run (it sets `draft: true` on the
8 expired national-day products).

## Steps

1. **Confirm the daily cron retired National Day**
   - Check `content/national-day/*.md` all show `draft: true` (8 products).

2. **Publish the new section**
   - In `content/autumn-deals/_index.md`: set `draft: false`.

3. **Retire the old section page** (so /national-day/ doesn't render empty)
   - In `content/national-day/_index.md`: set `draft: true`.

4. **Point the homepage promo slot at the new section**
   - Edit `layouts/index.html`:
     - Nav (line ~62): `<a href="/national-day/" …>🎉 National Day</a>`
       → `<a href="/autumn-deals/" …>🍂 Autumn Deals</a>`
     - Promo banner (lines ~77–80):
       - Title → `🍂 Autumn Deals are live`
       - Description → `Resort stays, ocean parks & seasonal feasts for Oct–Nov — with real guest reviews.`
       - Button → `<a class="btn" href="/autumn-deals/">See autumn deals</a>`
     - "Latest Deals" range (line ~110): in the section slice,
       replace `"national-day"` with `"autumn-deals"`.

5. **Rebuild and verify locally**
   - Run `~/workspace/bin/hugo --minify --cleanDestinationDir`
   - Confirm no errors, and `public/autumn-deals/index.html` exists.

6. **Commit and push**
   - `git add -A && git -c user.name="Allhunan" -c user.email="allhunan.com@gmail.com" commit -m "Launch Autumn Deals 2026 collection, retire National Day section" && git push origin master`
   - Cloudflare Pages auto-deploys on push — confirm the deployment succeeds.

7. **Verify live**
   - `https://yumfam.com/autumn-deals/` loads with the 6 teasers.
   - Homepage promo banner + nav point to `/autumn-deals/`.
   - `https://yumfam.com/national-day/` no longer renders.

## Notes

- Do NOT touch `hugo.yaml` menus (national-day was never in the menu).
- The `/go/nd-*` interstitial pages can stay; they're excluded from the sitemap.
- If any autumn-deals product expires before Oct 8, swap its teaser line out.
