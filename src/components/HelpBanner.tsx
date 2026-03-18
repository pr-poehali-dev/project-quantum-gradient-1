export default function HelpBanner() {
  return (
    <div className="bg-red-600 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <p className="uppercase text-red-200 text-sm tracking-widest mb-3">Нужна помощь?</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight max-w-xl">
            Если ты или твой близкий столкнулся с зависимостью — звони прямо сейчас
          </h2>
          <p className="text-red-200 mt-4 text-base max-w-lg leading-relaxed">
            Телефон доверия работает круглосуточно, анонимно и бесплатно. 
            Специалисты помогут разобраться в ситуации и подскажут, куда обратиться.
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-end gap-4 shrink-0">
          <a
            href="tel:88002000122"
            className="bg-white text-red-600 font-bold text-2xl lg:text-3xl px-10 py-5 rounded-xl hover:bg-red-50 transition-colors duration-300 whitespace-nowrap"
          >
            8-800-2000-122
          </a>
          <p className="text-red-200 text-sm text-center lg:text-right">
            Бесплатная линия помощи детям · Россия
          </p>
          <a
            href="tel:80033009191"
            className="text-white underline underline-offset-4 text-sm hover:text-red-200 transition-colors duration-300"
          >
            Наркологическая служба: 8-800-200-0-200
          </a>
        </div>
      </div>
    </div>
  );
}
