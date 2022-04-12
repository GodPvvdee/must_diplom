/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Админ хуудас',
    description:
      'Та өөрийн сонгосон загварын админ хуудастай ажиллахад тусдаа IT-н мэдлэг шаардагдахгүй бөгөөд мэдээллээ хүссэн үедээ өөрчлөх, засах, устгах, зарим шаардлагагүй хэсгүүдийг нуух, ноороглох боломжтой. Мөн танд зориулсан гарын авлага админ дотор бий.',
    icon: GlobeAltIcon,
  },
  {
    name: 'SEO friendly',
    description:
      'Манай вэб систем нь хайлтын системд дээгүүр байрлах бүх суурь тохиргоо хийгдсэн. Мөн та өөрөө хайлтад гарч ирэх үгнүүдээ тохируулах боломжтой.',
    icon: ScaleIcon,
  },
  {
    name: 'RESPONSIVE ',
    description:
      'RESPONSIVE буюу бүх төрлийн төхөөрөмж дэмждэг веб сайт.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Нэмэлт боломжууд',
    description:
      'Таны бизнест вэб сайтаас гадна чатбот, байгууллагын дуудлага удирдах систем (callcenter), харилцагчийн менежментийн удирдах систем (CRM) зэрэг бусад бизнес автоматжуулалтын системүүд шаардлагатай бол үүнийг өөр газраас хайх хэрэггүй. Манай системд бүгд нэг дор бий.',
    icon: AnnotationIcon,
  },
]

export default function SecondHero() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
           Давуу талууд
          </p>
         
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}