---
name: yumfam-find-a-deal
description: "Find a family hotel buffet or resort package on YumFam and check its price, validity and what is included before booking."
---

# Find a family deal on YumFam

Use this skill when someone asks for a family hotel buffet, resort stay, hot spring or family package in China, or wants to check whether a YumFam deal is still bookable.

## What YumFam is

YumFam (https://yumfam.com/) recommends Chinese hotel buffets, family rooms and resort packages to foreign visitors, in English. Prices are in CNY. YumFam lists deals; booking happens on the linked OTA platform. There is no booking API, no login and no account on YumFam.

## Steps

1. Find candidate deals. Read https://yumfam.com/llms.txt for the curated list of key pages, or https://yumfam.com/sitemap.xml for every public page. Seasonal collections: https://yumfam.com/winter-family-picks/ (winter ski trips, hot springs, indoor snow parks) and https://yumfam.com/spring-festival-ski-tours-2027/ (Chinese New Year ski tours).
2. Open the deal page. The same URL returns HTML by default and a Markdown twin when requested with `Accept: text/markdown` (or by opening `{page-url}index.md` directly).
3. Check the deal before recommending it:
   - Deal price in CNY and the original (struck-through) price.
   - Validity dates and any blackout dates.
   - What is included (meals, rooms, kids' club, number of adults and children).
   - Any coupon or promo conditions.
4. Report the deal with its title, price, validity, inclusions and the deal page URL. Cite the page.
5. Never present an expired deal as bookable. If the validity has passed, say so and suggest a current alternative from the same collection.
6. Do not invent prices, dates or inclusions. If a detail is not on the page, say it is not stated. Booking is done through the "Get this deal" link on the page, which goes to the OTA platform; do not claim the booking happens on YumFam.
