import React from "react"


// Tier 1
import { ReactComponent as UniversialAudio } from "../../assets/sponsors/UniversalAudio.svg"

// Tier 2
import { ReactComponent as BaskinEngineering } from "../../assets/sponsors/BaskinEngineering.svg"
import { ReactComponent as CIED } from "../../assets/sponsors/CIED.svg"

// Tier 3
import { ReactComponent as CruzFoam } from "../../assets/sponsors/CruzFoam.svg"
import { ReactComponent as QB3 } from "../../assets/sponsors/QB3.svg"
import { ReactComponent as StudentAffairsDivision } from "../../assets/sponsors/StudentAffairsDivision.svg"
import { ReactComponent as HumanitiesInsititue } from "../../assets/sponsors/HumanitiesInstitute.svg"
import { ReactComponent as HumanitiesDivision } from "../../assets/sponsors/HumanitiesDivision.svg"

// Tier 4
import { ReactComponent as SUA } from "../../assets/sponsors/SUA.svg"

// Tier 5
import { ReactComponent as SouthSwell } from "../../assets/sponsors/SouthSwell.svg"
import { ReactComponent as ArtsDivision } from "../../assets/sponsors/ArtsDivision.svg"
import { ReactComponent as GenomicsInstitute } from "../../assets/sponsors/GenomicsInstitute.svg"
import { ReactComponent as Citris } from "../../assets/sponsors/Citris.svg"
import { ReactComponent as Cross } from "../../assets/sponsors/CROSS.svg"
import { ReactComponent as RapidRobots } from "../../assets/sponsors/RapidRobots.svg"
import { ReactComponent as SCEDH } from "../../assets/sponsors/SCEDH.svg"

// Tier 6
import { ReactComponent as InspiritAi } from "../../assets/sponsors/InspiritAi.svg"
import { ReactComponent as TeachingLearningCenter } from "../../assets/sponsors/TeachingLearningCenter.svg"
import { ReactComponent as ArtsResearchInstitute } from "../../assets/sponsors/ArtsResearchInstitute.svg"
import { ReactComponent as StandOutSticekrs } from "../../assets/sponsors/StandOutStickers.svg"

// Tier 7
import { ReactComponent as Backbone } from "../../assets/sponsors/Backbone.svg"
import { ReactComponent as Wolfram } from "../../assets/sponsors/Wolfram.svg"
import { ReactComponent as Balsamiq } from "../../assets/sponsors/Balsamiq.svg"
import { ReactComponent as Echo3d } from "../../assets/sponsors/echo3D.svg"
import { ReactComponent as Vectara } from "../../assets/sponsors/Vectara.svg"
import { ReactComponent as Verbwire } from "../../assets/sponsors/Verbwire.svg"
import { ReactComponent as Axure } from "../../assets/sponsors/Axure.svg"
import { ReactComponent as GoogleCloud } from "../../assets/sponsors/GoogleCloud.svg"

// Special Thanks
import { ReactComponent as BreretonLawOffice } from "../../assets/sponsors/BreretonLawOffice.svg"
import { ReactComponent as SeghettiWaxler } from "../../assets/sponsors/SeghettiWaxler.svg"

interface SponsorsProps {
  link: string
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >
  alt: string
}


// NOTE: these are last years sponsors, please update with this years sponsors
export const SponsorsIconsLinks: Array<Array<SponsorsProps>> = [
  // Tier 1
  [
    {
      alt: "Universal Audio",
      icon: UniversialAudio,
      link: "https://www.uaudio.com/",
    },
    // ],

    // // Tier 2
    // [
    {
      alt: "Baskin Engineering",
      icon: BaskinEngineering,
      link: "https://www.soe.ucsc.edu/",
    },
    {
      alt: "CIED",
      icon: CIED,
      link: "https://cied.ucsc.edu/",
    },
  ],

  // Tier 3
  [
    {
      alt: "The Humanities Institute",
      icon: HumanitiesInsititue,
      link: "https://thi.ucsc.edu/",
    },
    {
      alt: "Cruz Foam",
      icon: CruzFoam,
      link: "https://www.cruzfoam.com/",
    },
  ],
  [
    {
      alt: "Division of Student Affairs",
      icon: StudentAffairsDivision,
      link: "https://studentsuccess.ucsc.edu/",
    },
    {
      alt: "The Humanities Division",
      icon: HumanitiesDivision,
      link: "https://humanities.ucsc.edu/",
    },
    {
      alt: "qb3",
      icon: QB3,
      link: "https://qb3.ucsc.edu/",
    },
  ],

  // Tier 4
  [
    { alt: "SUA", 
      icon: SUA, 
      link: "https://sua.ucsc.edu/"
    },
    // ],

    // Tier 5
    // [
    {
      alt: "South Swell Ventures",
      icon: SouthSwell,
      link: "https://www.linkedin.com/in/bud-colligan-1793022/",
    },
    // {
    //   name: "City of Santa Cruz Economic Development",
    //   url: "https://www.cityofsantacruz.com/government/city-departments/economic-development",
    // },
    { 
      alt: "CROSS", 
      icon: Cross, 
      link: "https://cross.ucsc.edu/"
    },
    {
      alt: "Rapid Robots",
      icon: RapidRobots,
      link: "https://www.rapidrobotics.com/",
    },
  ],
  [
    {
      alt: "Division of the Arts",
      icon: ArtsDivision,
      link: "https://arts.ucsc.edu/page/division-description",
    },
    {
      alt: "Genomics Institute",
      icon: GenomicsInstitute,
      link: "https://genomics.ucsc.edu/",
    },
    { 
      alt: "CITRIS",
      icon: Citris,
      link: "https://citris-uc.org/"
    },
    {
      alt: "City of Santa Cruz Economic Development",
      icon: SCEDH,
      link: "https://www.cityofsantacruz.com/government/city-departments/economic-development",
    },
  ],
  [
    // Tier 6
    {
      alt: "Stand Out Stickers",
      icon: StandOutSticekrs,
      link: "http://hackp.ac/mlh-StandOutStickers-hackathons",
    },
    {
      alt: "Insprit AI",
      icon: InspiritAi,
      link: "https://www.inspiritai.com/",
    },
    {
      alt: "Teaching and Learning Center",
      icon: TeachingLearningCenter,
      link: "https://tlc.ucsc.edu/",
    },
    {
      alt: "Arts Research Institute",
      icon: ArtsResearchInstitute,
      link: "https://ari.ucsc.edu/",
    },
  ],

  // Tier 7
  [
    {
      alt: "Wolfram",
      icon: Wolfram,
      link: "https://www.wolfram.com/",
    },
    {
      alt: "Balsamiq",
      icon: Balsamiq,
      link: "https://balsamiq.com/",
    },
    {
      alt: "Backbone",
      icon: Backbone,
      link: "https://playbackbone.com/",
    },
    {
      alt: "Echo3D",
      icon: Echo3d,
      link: "https://www.echo3d.com/",
    },
    {
      alt: "Vectara",
      icon: Vectara,
      link: "https://vectara.com/",
    },
    {
      alt: "Verbwire",
      icon: Verbwire,
      link: "https://www.verbwire.com/",
    },
    {
      alt: "Axure",
      icon: Axure,
      link: "https://www.axure.com/",
    },
    {
      alt: "Google Cloud",
      icon: GoogleCloud,
      link: "https://cloud.google.com/",
    },
  ],
]

export const specialThanks = [
  {
    name: "Brereton Law Office",
    icon: BreretonLawOffice,
    url: "https://breretonlawoffice.com/",
  },
  {
    name: "Seghetti Waxler",
    icon: SeghettiWaxler,
    url: "https://www.seghettiwaxler.com/",
  },
]
