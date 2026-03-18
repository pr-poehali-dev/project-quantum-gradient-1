export default function BodyEffects() {
  const organs = [
    {
      organ: "Мозг",
      icon: "🧠",
      effects: [
        "Нарушение памяти и концентрации",
        "Разрушение дофаминовой системы",
        "Депрессия и тревожные расстройства",
        "Психозы и галлюцинации",
      ],
      color: "border-purple-200 bg-purple-50",
      iconBg: "bg-purple-100",
    },
    {
      organ: "Сердце",
      icon: "❤️",
      effects: [
        "Аритмия и тахикардия",
        "Инфаркт миокарда",
        "Повышение давления",
        "Сердечная недостаточность",
      ],
      color: "border-red-200 bg-red-50",
      iconBg: "bg-red-100",
    },
    {
      organ: "Лёгкие",
      icon: "🫁",
      effects: [
        "Хронический бронхит",
        "Рак лёгких",
        "Эмфизема",
        "Дыхательная недостаточность",
      ],
      color: "border-blue-200 bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      organ: "Печень",
      icon: "🟤",
      effects: [
        "Цирроз печени",
        "Гепатит",
        "Жировая дистрофия",
        "Печёночная недостаточность",
      ],
      color: "border-amber-200 bg-amber-50",
      iconBg: "bg-amber-100",
    },
    {
      organ: "Иммунитет",
      icon: "🛡️",
      effects: [
        "Снижение защитных функций",
        "Частые инфекции",
        "Медленное заживление ран",
        "Риск ВИЧ и гепатита",
      ],
      color: "border-green-200 bg-green-50",
      iconBg: "bg-green-100",
    },
    {
      organ: "Психика",
      icon: "💭",
      effects: [
        "Личностная деградация",
        "Потеря воли и мотивации",
        "Агрессия и раздражительность",
        "Суицидальные мысли",
      ],
      color: "border-neutral-200 bg-neutral-50",
      iconBg: "bg-neutral-100",
    },
  ];

  return (
    <div id="effects" className="bg-neutral-950 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-neutral-500 mb-4">Медицинские факты</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl leading-tight">
          Влияние ПАВ на органы и системы организма
        </h2>
        <p className="text-neutral-400 text-lg mb-16 max-w-2xl leading-relaxed">
          Каждое психоактивное вещество наносит удар сразу по нескольким системам организма. 
          Разрушения накапливаются с каждым употреблением и зачастую становятся необратимыми.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organs.map((item, i) => (
            <div
              key={i}
              className={`rounded-xl border p-7 ${item.color} transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center text-2xl mb-5`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">{item.organ}</h3>
              <ul className="space-y-2">
                {item.effects.map((effect, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                    {effect}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
