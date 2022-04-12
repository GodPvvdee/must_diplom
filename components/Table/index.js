import Tab from "../Tab"
export default function Table() {
  return (
    <>
<div className="grid grid-cols-8 gap-10">
  <div className="col-start-2  col-end-4 ...">
  <div className="grid grid-cols-1 divide-y">
  <div class="block ">
                <button class="bg-blue-800 hover:bg-gray-400  m-2 text-white font-bold py-2 px-4 rounded-md">
                    Загварыг үзэх 
                </button>
                <button class="bg-yellow-300 hover:bg-gray-400 m-2 text-gray-800 font-bold py-2 px-4 rounded-md">
                Захиалах
                </button>
</div>
  <div className="py-2">Жилд <span className="px-2 float-right bg-blue-600 text-white rounded-md	">146,300₮</span></div>
  <div className="py-2">Домайн хаягт (MN)  <span className="px-2 float-right bg-blue-600 text-white rounded-md	">99,000₮</span></div>
  <div className="py-2">Домайн хаягт (COM) <span className="px-2 float-right bg-blue-600 text-white rounded-md	"> 33,000₮</span></div>
  <div className="py-2">Бизнес и-мэйл  <span className="px-2 float-right bg-green-600 text-white rounded-md	">1 бонус</span></div>

</div>
  </div>
  <div className="col-start-4  col-end-8 ...">
      <h1>GS-008 Сургалтын байгууллагын танилцуулга
     
      </h1>
  <Tab/>

      
  </div>
</div>

 
 </>
  )
}
