import Header from "@/app/[lang]/header/Header";
import WhoAreWe from "@/app/[lang]/WhoAreWe/WhoAreWe"
import Features from "@/app/[lang]/features/Features";
import Services from "@/app/[lang]/advantage/Services";
import Pricing from "@/app/[lang]/pricing/Pricing";
import Partners from "@/app/[lang]/partners/Partners";
import PartnersTools from "@/app/[lang]/partners2/PartnersTools";
import OurTeam from "@/app/[lang]/ourTeam/Partners";
import OurTeamCompany from "@/app/[lang]/ourTeamCompany/Partners";
import Jobs from "@/app/[lang]/jobs/Jobs"

import { ParamsLocale, SupportedLocales } from '@/types/globals';
import { getDictionary } from "@/lib/utils/dictionary";

export default async function Home({
  params }: { params: ParamsLocale }) {
    const {lang} = await params;
  
    const dir = lang === 'ar' ? 'rtl' : 'ltr'
    const dict = await getDictionary(lang)

    const isArabic = lang === "ar";

  return (
    <div>

      {/* header section */}
      <div>
      <Header dict={dict}/>
      </div>
      {/* header section */}

      {/* Who Are We section */}
      <div>
      <WhoAreWe dict={dict}/>
      </div>
      {/* Who Are We section */}

      {/* Features section */}
      <div>
      <Features dict={dict}/>
      </div>
      {/* Features section */}

      {/* Services section */}
      <div>
      <Services dict={dict}/>
      </div>
      {/* Services section */}

      {/* Pricing section */}
      <div>
      <Pricing dict={dict}/>
      </div>
      {/* Pricing section */}

      {/* Services section */}
      <div>
      <Jobs dict={dict}/>
      </div>
      {/* Services section */}

      {/* Partners section */}
      <div>
      <Partners dict={dict}/>
      </div>
      {/* Partners section */}

      {/* Partners Tools section */}
      <div>
      <PartnersTools />
      </div>
      {/* Partners Tools section */}

      {/* our team section */}
      <div>
      <OurTeam dict={dict} title={isArabic ? dict.team_title_ar : dict.team_title} />

      <OurTeamCompany dict={dict} title="" />
      </div>
      {/* our team section */}

    </div>

  );
}
