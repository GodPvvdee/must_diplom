export default function Tab() {
    return (
      <>
<div>
  <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" id="tabs-tab3" role="tablist">
    <li className="nav-item" role="presentation">
      <a href="#tabs-home3" className="
      shadow-md
nav-link
w-full
block
font-medium
text-xs
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
active
    " id="tabs-home-tab3" data-bs-toggle="pill" data-bs-target="#tabs-home3" role="tab" aria-controls="tabs-home3" aria-selected="true">Тухай</a>
    </li>
    <li className="nav-item" role="presentation">
      <a href="#tabs-profile3" className="
nav-link
w-full
block
font-medium
text-xs
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
focus:border-transparent
    " id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab" aria-controls="tabs-profile3" aria-selected="false">Боломжууд</a>
    </li>
    <li className="nav-item" role="presentation">
      <a href="#tabs-messages3" className="
nav-link
w-full
block
font-medium
text-xs
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
focus:border-transparent
    " id="tabs-messages-tab3" data-bs-toggle="pill" data-bs-target="#tabs-messages3" role="tab" aria-controls="tabs-messages3" aria-selected="false">Нэмэлт үйлчилгээ</a>
    </li>
  </ul>
  <div className="tab-content" id="tabs-tabContent3">
    <div className="tab-pane fade show active" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
    ТАНИЛЦУУЛГА

Тухайн загвар нь Сургалтын үйл ажиллагаа явуулдаг хувь хүн болон албан байгууллагад зориулагдсан танилцуулга сайтаар ашиглах боломжтой Грийн софт ххк-ний хөгжүүлсэн флатформ дээр хийгдсэн бэлэн темплет юм. Уг флатформын админ хэсэг буюу вэб сайтын удирдах хэсэг нь монгол хэл дээр бөгөөд  ямар нэгэн програмист болон IT-гийн мэдлэгтэй хүн байх шаардлагагүй ямар ч хүн ашиглахад хялбар юм. Бэлэн вэбийн үндсэн бренд өнгө болон логог солих бүрэн боломжтой ба одоо байгаа демо контентуудын оронд өөрийн мэдээллий оруулж ашиглаж болно.

"БИДНИЙ ТУХАЙ" ХУУДАС

Өөрийн байгууллагын тухай танилцуулга болон онцлох хүмүүсийн товч танилцуулгыг нэмж болно.    </div>
    <div className="tab-pane fade" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">

    </div>
    <div className="tab-pane fade" id="tabs-messages3" role="tabpanel" aria-labelledby="tabs-profile-tab3">

    </div>
  </div>
</div>

</>
  )
}

