import Header from "@/components/header/page";
import WhoAreWe from "@/components/WhoAreWe/page"
import Features from "@/components/features/page";
import Services from "@/components/advantage/page";
import Pricing from "@/components/pricing/page";
import Partners from "@/components/partners/page";
import PartnersTools from "@/components/partners2/page";
import OurTeam from "@/components/ourteam/page";
import { ParamsLocale, SupportedLocales } from '@/types/globals';
import { getDictionary } from "@/lib/utils/dictionary";

export default async function Home({ children,
  params }: Readonly<{ children: React.ReactNode, params: ParamsLocale }>) {
    const {lang} = await params;
  
    const dir = lang === 'ar' ? 'rtl' : 'ltr'
    const dict = await getDictionary(lang)

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
      <OurTeam dict={dict}/>
      </div>
      {/* our team section */}

    </div>

  );
}
