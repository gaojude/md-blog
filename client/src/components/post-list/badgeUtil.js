import { compact, last } from "lodash";

export function getProperTitle(raw) {
  const badgePrefixRe = /^(\[[^\]\[]+]\s*)*(.*)/g;
  return last([...raw.matchAll(badgePrefixRe)][0]);
}

// Input: "[Pin] [LeetCode] Let's think about A[i]"
// Output: ["Pin", "LeetCode"]
export function parseBadges(raw) {
  const badgePrefixRe = /^(\[[^\]\[]+]\s*)*/g;
  const rawBadgesQuery = raw.match(badgePrefixRe);
  if (rawBadgesQuery.length === 0) {
    return [];
  }
  const rawBadges = rawBadgesQuery[0];
  const singleBadgeRe = /\[([^\[\]]*)]/g;
  const matches = [...rawBadges.matchAll(singleBadgeRe)];
  return compact(matches.map((match) => match[1]));
}

export function isBadgeIncludedInTitle(badgeName, title) {
  return parseBadges(title).includes(badgeName);
}
