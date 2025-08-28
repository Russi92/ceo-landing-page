import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);

  return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const PUBLIC_FILE = /\.(.*)$/;
  const STATIC_PATHS = ["/manifest.json", "/favicon.ico", "/robots.txt", "/sitemap.xml"];
  const STATIC_PREFIXES = ["/images/", "/fonts/", "/css/", "/js/", "/_next/", "/public/"];

  // السماح للطلبات الثابتة بالمرور
  if (
    STATIC_PATHS.includes(pathname) ||
    (PUBLIC_FILE.test(pathname) && STATIC_PREFIXES.some(prefix => pathname.startsWith(prefix)))
  ) {
    return NextResponse.next();
  }

  // التحقق إذا كان المسار لا يحتوي على locale
  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
