import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Shield,
  Truck,
  Wrench,
  Clock,
  Beaker,
  Layers,
  Droplets,
  Sun,
  Flame,
  Cpu,
  FlaskConical,
  Search,
  Gauge,
  Zap,
  Thermometer,
  Wind,
  Box,
  Send,
} from 'lucide-react';

const catalogItems = [
  {
    id: 1,
    title: 'Нанесение покрытий центрифугированием',
    description: 'Центрифуги для нанесения фоторезиста и тонких плёнок',
    icon: Layers,
    category: 'Нанесение покрытий',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Нанесение покрытий распылением',
    description: 'Установки магнетронного распыления и термического испарения',
    icon: Wind,
    category: 'Нанесение покрытий',
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 3,
    title: 'Нанесение покрытий погружением',
    description: 'Dip-coater системы для нанесения равномерных покрытий',
    icon: Droplets,
    category: 'Нанесение покрытий',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Проявление фоторезиста',
    description: 'Установки проявки для литографических процессов',
    icon: Beaker,
    category: 'Литография',
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 5,
    title: 'Нагревательные плиты',
    description: 'Плиты для сушки и термообработки фоторезиста',
    icon: Flame,
    category: 'Термообработка',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 6,
    title: 'Безмасковая литография',
    description: 'Настольные системы прямого лазерного письма',
    icon: Cpu,
    category: 'Литография',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    id: 7,
    title: 'Отмывка и сушка пластин',
    description: 'Системы очистки и сушки пластин в кассетах',
    icon: FlaskConical,
    category: 'Очистка',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 8,
    title: 'Зондовые станции',
    description: 'Ручные и автоматические зондовые станции для измерений',
    icon: Gauge,
    category: 'Измерения',
    color: 'from-emerald-500 to-green-500',
  },
  {
    id: 9,
    title: 'Четырёхзондовый метод',
    description: 'Измерение удельного сопротивления полупроводников',
    icon: Search,
    category: 'Измерения',
    color: 'from-sky-500 to-indigo-500',
  },
  {
    id: 10,
    title: 'Тип проводимости',
    description: 'Определение типа проводимости полупроводниковых материалов',
    icon: Zap,
    category: 'Измерения',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 11,
    title: 'Сопротивление диэлектриков',
    description: 'Измерение удельного объёмного и поверхностного сопротивления',
    icon: Thermometer,
    category: 'Измерения',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 12,
    title: 'Лабораторные мешалки',
    description: 'Верхнеприводные и магнитные мешалки для растворов',
    icon: Box,
    category: 'Лабораторное',
    color: 'from-lime-500 to-green-500',
  },
  {
    id: 13,
    title: 'Сушильные шкафы',
    description: 'Вакуумные сушильные шкафы для лабораторных процессов',
    icon: Sun,
    category: 'Лабораторное',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    id: 14,
    title: 'Шкафы сухого хранения',
    description: 'Шкафы для хранения чувствительных материалов и пластин',
    icon: Shield,
    category: 'Хранение',
    color: 'from-slate-500 to-gray-600',
  },
];

const categories = ['Все', 'Нанесение покрытий', 'Литография', 'Термообработка', 'Очистка', 'Измерения', 'Лабораторное', 'Хранение'];

const advantages = [
  {
    icon: Truck,
    title: 'Поставка со склада',
    description: 'Оборудование в наличии на складе в Москве с доставкой от 1 дня',
  },
  {
    icon: Wrench,
    title: 'Сервис и поддержка',
    description: 'Пусконаладка, обучение персонала и техническое обслуживание',
  },
  {
    icon: Shield,
    title: 'Гарантия качества',
    description: 'Официальная гарантия производителя на всё оборудование',
  },
  {
    icon: Clock,
    title: 'Оперативность',
    description: 'Подбор оборудования и коммерческое предложение за 1 день',
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Все');

  const filteredItems = activeCategory === 'Все'
    ? catalogItems
    : catalogItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">СМ</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-bold text-slate-900 leading-tight">СПУТНИК</div>
                <div className="text-xs text-slate-500 leading-tight">МИКРОТЕХНОЛОГИЙ</div>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">Оборудование</a>
              <a href="#" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">О компании</a>
              <a href="#" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Сервис</a>
              <a href="#" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>

            {/* Contact */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+74957965096" className="text-sm font-semibold text-slate-900">
                +7 495 796-50-96
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-blue-600/25"
              >
                Запрос предложения
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3"
          >
            <a href="#" className="block py-2 text-sm font-medium text-slate-900">Оборудование</a>
            <a href="#" className="block py-2 text-sm font-medium text-slate-500">О компании</a>
            <a href="#" className="block py-2 text-sm font-medium text-slate-500">Сервис</a>
            <a href="#" className="block py-2 text-sm font-medium text-slate-500">Контакты</a>
            <div className="pt-3 border-t border-slate-100">
              <a href="tel:+74957965096" className="block py-2 text-sm font-semibold text-slate-900">
                +7 495 796-50-96
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-medium text-blue-300">Каталог оборудования 2025</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Оборудование для полупроводникового производства
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
                Оснащаем российские предприятия микроэлектроники и научные учреждения 
                современным промышленным и лабораторным оборудованием
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#catalog"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all hover:shadow-xl hover:shadow-blue-600/25"
                >
                  Смотреть каталог
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl border border-white/10 transition-all"
                >
                  Запросить КП
                </a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10"
            >
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-white">14+</div>
                <div className="text-sm text-slate-400 mt-1">Категорий оборудования</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-slate-400 mt-1">Позиций в каталоге</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-white">15 лет</div>
                <div className="text-sm text-slate-400 mt-1">На рынке</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Каталог оборудования</h2>
              <p className="text-slate-500 mt-2">Выберите категорию или просмотрите весь ассортимент</p>
            </div>
            <div className="text-sm text-slate-500">
              Показано: <span className="font-semibold text-slate-900">{filteredItems.length}</span> позиций
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Catalog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.id}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative bg-white rounded-2xl border border-slate-200/80 p-6 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="mb-3">
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Arrow */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Почему выбирают нас</h2>
            <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
              Комплексное оснащение предприятий — от подбора оборудования до пусконаладки и сервиса
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, index) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{adv.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{adv.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA / Contact Form Section */}
      <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Info */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Запросите коммерческое предложение
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Опишите ваши задачи — мы подберём оптимальное решение и подготовим 
                индивидуальное предложение с лучшими ценами и сроками поставки.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Телефон</div>
                    <a href="tel:+74957965096" className="text-white font-medium">+7 495 796-50-96</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Email</div>
                    <a href="mailto:info@sputnik-micro.ru" className="text-white font-medium">info@sputnik-micro.ru</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Адрес</div>
                    <span className="text-white font-medium">Москва, Россия</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Заполните форму</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Имя</label>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Компания</label>
                    <input
                      type="text"
                      placeholder="Название компании"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      placeholder="email@company.ru"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Сообщение</label>
                  <textarea
                    rows={4}
                    placeholder="Опишите ваше оборудование или задачу..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-blue-600/25"
                >
                  <Send className="w-4 h-4" />
                  Отправить запрос
                </button>
                <p className="text-xs text-slate-400 text-center">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="#" className="text-blue-600 hover:underline">политикой обработки персональных данных</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">СМ</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-tight">СПУТНИК</div>
                  <div className="text-xs text-slate-400 leading-tight">МИКРОТЕХНОЛОГИЙ</div>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Оснащение предприятий микроэлектроники и научных учреждений современным оборудованием
              </p>
            </div>

            {/* Catalog */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Каталог</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Нанесение покрытий</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Литография</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Зондовые станции</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Измерения</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Лабораторное оборудование</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Компания</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Сервис</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Новости</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Контакты</h4>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-500" />
                  <a href="tel:+74957965096" className="text-sm text-slate-400 hover:text-white transition-colors">+7 495 796-50-96</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-500" />
                  <a href="mailto:info@sputnik-micro.ru" className="text-sm text-slate-400 hover:text-white transition-colors">info@sputnik-micro.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span className="text-sm text-slate-400">Москва, Россия</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © 2025 Спутник Микротехнологий. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Обработка персональных данных</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
