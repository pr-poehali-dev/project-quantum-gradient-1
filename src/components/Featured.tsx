export default function Featured() {
  const causes = [
    {
      icon: "🧠",
      title: "Психологические причины",
      desc: "Стресс, тревога, депрессия, желание уйти от проблем. Низкая самооценка и неумение справляться с эмоциями.",
    },
    {
      icon: "👥",
      title: "Социальные причины",
      desc: "Давление сверстников, неблагополучная среда, доступность веществ, отсутствие поддержки близких.",
    },
    {
      icon: "🧬",
      title: "Биологические факторы",
      desc: "Наследственная предрасположенность, особенности нейромедиаторной системы — у некоторых людей риск выше.",
    },
    {
      icon: "⚠️",
      title: "Последствия для мозга",
      desc: "ПАВ разрушают дофаминовую систему, нарушают память, концентрацию и способность принимать решения.",
    },
    {
      icon: "💔",
      title: "Социальные последствия",
      desc: "Разрушение семьи, потеря работы, социальная изоляция, криминальное поведение.",
    },
    {
      icon: "🏥",
      title: "Физические последствия",
      desc: "Болезни сердца, печени, лёгких. Иммунодефицит, истощение организма, риск передозировки.",
    },
  ];

  return (
    <div id="causes" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-neutral-400 mb-4">Понять, чтобы предотвратить</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-16 max-w-2xl leading-tight">
          Причины и последствия зависимости
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((item, i) => (
            <div key={i} className="border border-neutral-100 p-8 hover:border-neutral-300 transition-colors duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">{item.title}</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
