import { useState } from "react";

const stages = [
  {
    num: "01",
    title: "Признание проблемы",
    duration: "Первый шаг",
    color: "border-amber-400",
    accent: "text-amber-500",
    desc: "Самый сложный этап — осознать, что зависимость существует и что она разрушает жизнь. Без этого осознания лечение невозможно.",
    details: [
      "Человек перестаёт отрицать наличие проблемы",
      "Появляется желание изменить ситуацию",
      "Разговор с близкими или специалистом",
      "Первичная консультация нарколога — анонимна и бесплатна",
    ],
    tip: "Позвоните на горячую линию 8-800-200-0-200 — это первый и самый важный шаг.",
  },
  {
    num: "02",
    title: "Детоксикация",
    duration: "7–14 дней",
    color: "border-blue-400",
    accent: "text-blue-500",
    desc: "Медицинское очищение организма от токсинов. Проводится под строгим наблюдением врачей — самостоятельная «ломка» смертельно опасна.",
    details: [
      "Госпитализация в наркологическую клинику",
      "Введение препаратов для снятия синдрома отмены",
      "Капельницы, снимающие интоксикацию",
      "Круглосуточное наблюдение врачей и медсестёр",
      "Восстановление нормального сна и питания",
    ],
    tip: "Никогда не пытайтесь пройти детоксикацию самостоятельно — это может привести к смерти.",
  },
  {
    num: "03",
    title: "Медикаментозное лечение",
    duration: "1–6 месяцев",
    color: "border-violet-400",
    accent: "text-violet-500",
    desc: "Врачи подбирают препараты, которые снижают тягу к веществу, нормализуют работу нервной системы и лечат сопутствующие расстройства.",
    details: [
      "Антагонисты — блокируют эйфорию от вещества",
      "Антидепрессанты при депрессии и тревоге",
      "Нормотимики для стабилизации настроения",
      "Ноотропы для восстановления когнитивных функций",
      "Регулярные анализы крови и мочи для контроля",
      "Схема лечения индивидуальна — нет универсального рецепта",
    ],
    tip: "Самовольная отмена препаратов — одна из главных причин срыва. Следуйте схеме врача.",
  },
  {
    num: "04",
    title: "Психотерапия",
    duration: "6–12 месяцев",
    color: "border-green-400",
    accent: "text-green-500",
    desc: "Ключевой этап: зависимость — это прежде всего болезнь психики. Терапия помогает найти и устранить глубинные причины.",
    details: [
      "Индивидуальные сессии с психологом или психотерапевтом",
      "Когнитивно-поведенческая терапия (КПТ) — изменение разрушительных мыслей",
      "Групповая терапия — работа со сверстниками",
      "Семейная терапия — восстановление отношений",
      "Арт-терапия, телесные практики, медитации",
      "Обучение навыкам справляться со стрессом без веществ",
    ],
    tip: "Психотерапия — не слабость. Это работа над собой, которую замечают все вокруг.",
  },
  {
    num: "05",
    title: "Реабилитация",
    duration: "6–18 месяцев",
    color: "border-orange-400",
    accent: "text-orange-500",
    desc: "Возвращение к нормальной жизни в структурированной среде. Человек учится жить заново — без веществ, с новыми ценностями и навыками.",
    details: [
      "Реабилитационные центры — дневные или стационарные",
      "Чёткий распорядок дня — защита от срыва",
      "Трудотерапия, спорт, творчество",
      "Обучение профессиональным и социальным навыкам",
      "Программы 12 шагов (АА, АН) — общность с опытом",
      "Постепенное возвращение в общество под контролем",
    ],
    tip: "Полноценная реабилитация снижает риск срыва в 3–4 раза по сравнению с одной детоксикацией.",
  },
  {
    num: "06",
    title: "Поддерживающая терапия",
    duration: "Пожизненно",
    color: "border-red-400",
    accent: "text-red-500",
    desc: "Ремиссия — не конец лечения. Зависимость — хроническая болезнь, требующая постоянного внимания и работы над собой.",
    details: [
      "Регулярные встречи с наркологом и психологом",
      "Группы поддержки (АА, АН, SMART Recovery)",
      "Здоровый образ жизни — спорт, сон, питание",
      "Новые хобби и смыслы взамен старого образа жизни",
      "Поддержка семьи и близкого окружения",
      "Умение распознавать и избегать триггеров срыва",
      "При срыве — немедленное обращение к врачу, а не стыд",
    ],
    tip: "Срыв — не провал, а часть болезни. Главное — не останавливаться и продолжать лечение.",
  },
];

export default function Treatment() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div id="treatment" className="bg-neutral-50 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-neutral-400 mb-4">Путь к выздоровлению</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 max-w-2xl leading-tight">
          Как проходит лечение от зависимости
        </h2>
        <p className="text-neutral-500 text-lg mb-16 max-w-2xl leading-relaxed">
          Выздоровление — это процесс, а не событие. Он состоит из нескольких 
          последовательных этапов, каждый из которых важен. Нажмите на этап, 
          чтобы узнать подробнее.
        </p>

        <div className="space-y-4">
          {stages.map((stage, i) => (
            <div
              key={i}
              className={`border-l-4 ${stage.color} bg-white cursor-pointer transition-all duration-300 hover:shadow-md`}
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className="p-6 lg:p-8 flex items-start gap-6">
                <span className={`text-4xl font-bold ${stage.accent} shrink-0 leading-none`}>
                  {stage.num}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-neutral-900">{stage.title}</h3>
                    <span className="text-sm text-neutral-400 shrink-0 bg-neutral-100 px-3 py-1 rounded-full">
                      {stage.duration}
                    </span>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">{stage.desc}</p>

                  {active === i && (
                    <div className="mt-6 space-y-4">
                      <ul className="space-y-2">
                        {stage.details.map((d, j) => (
                          <li key={j} className="flex items-start gap-3 text-neutral-700 text-sm leading-relaxed">
                            <span className={`mt-1 w-2 h-2 rounded-full shrink-0 ${stage.accent.replace("text-", "bg-")}`} />
                            {d}
                          </li>
                        ))}
                      </ul>
                      <div className={`border ${stage.color.replace("border-", "border-")} bg-neutral-50 rounded-lg p-4`}>
                        <p className={`text-sm font-semibold ${stage.accent} mb-1`}>Важно знать:</p>
                        <p className="text-neutral-600 text-sm leading-relaxed">{stage.tip}</p>
                      </div>
                    </div>
                  )}
                </div>
                <span className="text-neutral-400 text-xl shrink-0 mt-1">
                  {active === i ? "−" : "+"}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 border border-neutral-200">
            <div className="text-3xl mb-4">🏥</div>
            <h4 className="font-bold text-neutral-900 mb-2">Государственные клиники</h4>
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">
              Наркологические диспансеры есть в каждом городе. Лечение по полису ОМС — бесплатно. 
              Возможна анонимная постановка на учёт.
            </p>
            <a href="tel:88002000200" className="text-sm font-semibold text-neutral-900 underline underline-offset-4">
              8-800-200-0-200 — справочная
            </a>
          </div>
          <div className="bg-white p-8 border border-neutral-200">
            <div className="text-3xl mb-4">🤝</div>
            <h4 className="font-bold text-neutral-900 mb-2">Группы взаимопомощи</h4>
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">
              Анонимные Алкоголики (АА) и Анонимные Наркоманы (АН) — бесплатные 
              сообщества для тех, кто хочет бросить. Встречи проходят в каждом городе.
            </p>
            <span className="text-sm text-neutral-500">Найти встречу: aa.ru / narcotics-anonymous.ru</span>
          </div>
          <div className="bg-white p-8 border border-neutral-200">
            <div className="text-3xl mb-4">👨‍👩‍👧</div>
            <h4 className="font-bold text-neutral-900 mb-2">Помощь родственникам</h4>
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">
              Со-зависимость — это тоже болезнь. Группы Ал-Анон и Нар-Анон помогают 
              семьям зависимых справиться и выстроить правильное поведение.
            </p>
            <span className="text-sm text-neutral-500">al-anon.ru — поддержка семей</span>
          </div>
        </div>
      </div>
    </div>
  );
}
