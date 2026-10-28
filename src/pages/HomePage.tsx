import { Hero } from '../components/sections/home/Hero'
import { TrustStrip } from '../components/sections/home/TrustStrip'
import { CarePreview } from '../components/sections/home/CarePreview'
import { DoctorIntro } from '../components/sections/home/DoctorIntro'
import { CareApproach } from '../components/sections/home/CareApproach'
import { LocationCTA } from '../components/sections/home/LocationCTA'

export function HomePage() {
  return <><Hero /><TrustStrip /><CarePreview /><DoctorIntro /><CareApproach /><LocationCTA /></>
}
