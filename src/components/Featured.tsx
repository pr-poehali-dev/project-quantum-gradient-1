export default function Featured() {
  const causes = [
    {
      icon: "🧠",
      title: "Психологические причины",
      desc: "Стресс, тревога, депрессия, желание уйти от проблем. Низкая самооценка и неумение справляться с негативными эмоциями толкают к первому употреблению.",
    },
    {
      icon: "👥",
      title: "Социальные причины",
      desc: "Давление сверстников, неблагополучная среда, лёгкая доступность веществ и отсутствие поддержки со стороны близких.",
    },
    {
      icon: "🧬",
      title: "Биологические факторы",
      desc: "Наследственная предрасположенность и особенности нейромедиаторной системы — у некоторых людей риск зависимости значительно выше.",
    },
    {
      icon: "🎮",
      title: "Скука и поиск острых ощущений",
      desc: "Отсутствие увлечений, хобби и смысла. Желание «попробовать что-то новое» из любопытства или под влиянием культуры.",
    },
    {
      icon: "🏠",
      title: "Семейное неблагополучие",
      desc: "Насилие в семье, зависимые родители, отсутствие эмоциональной близости — всё это формирует почву для зависимости.",
    },
    {
      icon: "📱",
      title: "Влияние медиа и рекламы",
      desc: "Романтизация употребления в кино, музыке, соцсетях создаёт ложное впечатление о «безвредности» и «крутости» веществ.",
    },
  ];

  const consequences = [
    {
      icon: "⚠️",
      title: "Разрушение мозга",
      desc: "ПАВ разрушают дофаминовую систему, нарушают память, внимание и способность принимать решения. Изменения могут быть необратимыми.",
    },
    {
      icon: "💔",
      title: "Социальная деградация",
      desc: "Разрушение семьи и дружбы, потеря работы, социальная изоляция, конфликты с законом и криминальное поведение.",
    },
    {
      icon: "🏥",
      title: "Тяжёлые болезни",
      desc: "Болезни сердца, цирроз печени, рак лёгких, СПИД, гепатит. Средняя продолжительность жизни зависимого сокращается на 10–20 лет.",
    },
    {
      icon: "💸",
      title: "Финансовый крах",
      desc: "Зависимость требует всё больше денег. Человек тратит сбережения, берёт кредиты, теряет имущество ради следующей дозы.",
    },
    {
      icon: "👶",
      title: "Вред будущим детям",
      desc: "Употребление ПАВ во время беременности приводит к порокам развития, преждевременным родам и гибели плода.",
    },
    {
      icon: "☠️",
      title: "Смертельный риск",
      desc: "Передозировка — одна из ведущих причин смерти среди молодёжи. Каждый год от ПАВ погибают тысячи людей в России.",
    },
  ];

  return (
    <div id="causes" className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-24">
          <p className="uppercase text-sm tracking-widest text-neutral-400 mb-4">Понять, чтобы предотвратить</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 max-w-2xl leading-tight">
            Почему люди начинают употреблять ПАВ?
          </h2>
          <p className="text-neutral-500 text-lg mb-16 max-w-2xl leading-relaxed">
            Зависимость не возникает случайно — она формируется под влиянием целого ряда факторов. 
            Знание причин помогает выстроить защиту.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {causes.map((item, i) => (
              <div key={i} className="border border-neutral-100 p-8 hover:border-neutral-300 hover:shadow-sm transition-all duration-300">
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="uppercase text-sm tracking-widest text-neutral-400 mb-4">К чему это приводит</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 max-w-2xl leading-tight">
            Последствия зависимости
          </h2>
          <p className="text-neutral-500 text-lg mb-16 max-w-2xl leading-relaxed">
            Последствия затрагивают все сферы жизни — здоровье, семью, работу и будущее человека.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consequences.map((item, i) => (
              <div key={i} className="border border-neutral-100 p-8 hover:border-red-200 hover:shadow-sm transition-all duration-300">
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
