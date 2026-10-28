export type CareService = {
  slug: string
  number: string
  title: string
  description: string
  icon: 'recovery' | 'joint' | 'spine' | 'sport' | 'arthritis' | 'manual'
  detail: string
}

export const services: CareService[] = [
  {
    slug: 'post-operative-rehabilitation', number: '01', title: 'Post-Operative Rehabilitation',
    description: 'Targeted recovery protocols following surgery.',
    detail: 'Rehabilitation support after surgery, with care plans tailored to the recovery context and the person’s mobility needs.', icon: 'recovery',
  },
  {
    slug: 'joint-replacement-recovery', number: '02', title: 'Joint Replacement Recovery',
    description: 'Specialized rehabilitation for knee, hip, and shoulder arthroplasty.',
    detail: 'Physiotherapy focused on restoring movement and supporting recovery after knee, hip, and shoulder joint replacement.', icon: 'joint',
  },
  {
    slug: 'spine-musculoskeletal-care', number: '03', title: 'Spine & Musculoskeletal Care',
    description: 'Evidence-based management for acute and chronic back pain, neck pain, and sciatica.',
    detail: 'Care for acute and chronic back and neck pain, sciatica, and other musculoskeletal concerns.', icon: 'spine',
  },
  {
    slug: 'sports-injury-rehabilitation', number: '04', title: 'Sports Injury Rehabilitation',
    description: 'Restoring functional strength and mobility for athletes and active individuals.',
    detail: 'Rehabilitation that supports functional strength and mobility after an athletic injury.', icon: 'sport',
  },
  {
    slug: 'arthritis-joint-care', number: '05', title: 'Arthritis & Joint Care',
    description: 'Long-term pain management and joint mobility restoration.',
    detail: 'Physiotherapy focused on ongoing pain management and restoring joint mobility.', icon: 'arthritis',
  },
  {
    slug: 'manual-therapy-techniques', number: '06', title: 'Manual Therapy Techniques',
    description: 'Hands-on joint and soft tissue mobilization.',
    detail: 'Hands-on joint and soft tissue mobilization as part of orthopedic physiotherapy.', icon: 'manual',
  },
]
