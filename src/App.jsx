import React, { useState, useEffect, useRef } from 'react';
import {
Shield,
Thermometer,
Wind,
Activity,
Droplets,
Flame,
User,
Menu,
X,
BookOpen,
ArrowRight,
CheckCircle2,
ChevronDown,
Layout,
Brain,
ArrowDownCircle,
Sun,
Zap,
Bookmark
} from 'lucide-react';

// --- DATOS DEL CURSO ---

const courseData = [
{
id: "u2",
title: "Unidad 2: Fisiología Taiyang",
description: "Defensa, Superficie y Agua Fría",
theme: "blue",
chapters: [
{
id: "u2-c1",
title: "Introducción a Taiyang",
subtitle: "Capítulo 1",
image: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?auto=format&fit=crop&w=1200&q=80",
content: {
heading: "Taiyang: El Gran Yang",
description: "La conformación más externa. Taiyang es la primera línea de defensa, la muralla que protege al imperio del cuerpo contra el frío y el viento.",
cards: [
{
title: "Defensa Externa",
icon: <Shield className="w-6 h-6" />,
shortText: "La muralla del cuerpo",
modalTitle: "Primera Línea de Defensa",
modalContent: "Como la conformación más superficial, Taiyang actúa protegiendo al organismo. Controla la apertura y cierre de los poros (Cou Li) en el espacio entre la piel y los músculos para regular la temperatura."
},
{
title: "Calor y Corazón",
icon: <Thermometer className="w-6 h-6" />,
shortText: "Sangre caliente",
modalTitle: "Conexión con el Corazón",
modalContent: "Taiyang es la expansión del fuego del Corazón. Es sangre caliente bombeada a la superficie para mantenernos calientes frente al entorno."
},
{
title: "Raíz y Rama",
icon: <Wind className="w-6 h-6" />,
shortText: "Frío vs Yang",
modalTitle: "Dualidad Raíz y Rama",
modalContent: "Raíz (Ben) = Agua Fría. Rama (Biao) = Yang. Se necesita mucho Yang (Fuego) para controlar el Agua Fría de la superficie."
}
]
}
},
{
id: "u2-c2",
title: "Órganos y Canales",
subtitle: "Capítulo 2",
image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1200&q=80",
content: {
heading: "Anatomía Energética",
description: "Gobernando la espalda (el Norte del cuerpo), Taiyang gestiona los recursos hídricos a través de la Vejiga y separa lo puro de lo turbio mediante el Intestino Delgado.",
cards: [
{
title: "La Espalda",
icon: <User className="w-6 h-6" />,
shortText: "Zona Yang Mayor",
modalTitle: "El Escudo Posterior",
modalContent: "La espalda es la zona más expuesta al 'Viento Ladrón'. El canal Taiyang recorre toda la cadena posterior, protegiendo la estructura."
},
{
title: "Vejiga",
icon: <Droplets className="w-6 h-6" />,
shortText: "Transformación del Qi",
modalTitle: "Vejiga (Zu Taiyang)",
modalContent: "Almacena y vaporiza los fluidos. Su función es hacer ascender el 'Agua Pura' hacia el Pulmón para mantener el ciclo hidrológico."
},
{
title: "Intestino Delgado",
icon: <Flame className="w-6 h-6" />,
shortText: "Separación",
modalTitle: "Intestino Delgado (Shou Taiyang)",
modalContent: "Recibe del estómago y separa lo claro (nutrición) de lo turbio (desechos). Es el fuego fisiológico en el Jiao Inferior."
}
]
}
},
{
id: "u2-c3",
title: "Diagnóstico y Patología",
subtitle: "Capítulos 3 y 4",
image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
content: {
heading: "Signos Clínicos y Ataques",
description: "\"Todos los pulsos flotantes, rigidez y dolor de cabeza con aversión al frío pertenecen a Taiyang\". La enfermedad se manifiesta por Exceso (Cierre) o Deficiencia (Apertura).",
cards: [
{
title: "Pulso Flotante",
icon: <Activity className="w-6 h-6" />,
shortText: "Yang en Superficie",
modalTitle: "Pulso Flotante (Fu)",
modalContent: "Se siente al tocar la piel. Indica que la energía defensiva está luchando en el exterior contra un patógeno."
},
{
title: "Shang Han",
icon: <Shield className="w-6 h-6" />,
shortText: "Daño por Frío",
modalTitle: "Shang Han (Exceso)",
modalContent: "Ataque de Frío + Poros Cerrados. Fiebre SIN sudor, dolor corporal intenso, pulso tenso. Tratamiento: Ma Huang Tang."
},
{
title: "Zhong Feng",
icon: <Wind className="w-6 h-6" />,
shortText: "Ataque de Viento",
modalTitle: "Zhong Feng (Deficiencia)",
modalContent: "Ataque de Viento + Poros Abiertos. Fiebre CON sudor, aversión al viento, pulso moderado. Tratamiento: Gui Zhi Tang."
}
]
}
}
]
},
{
id: "u3",
title: "Unidad 3: Fisiología Yangming",
description: "Interior, Sequedad y Calor",
theme: "orange",
chapters: [
{
id: "u3-c1",
title: "El Significado de Yangming",
subtitle: "Capítulo 1",
image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
content: {
heading: "Yangming: Los Dos Yang Unidos",
description: "Si Taiyang es la apertura, Yangming es el cierre. Representa la etapa donde el Yang se vuelve brillante y se interioriza, asociándose con la Sequedad y el Metal.",
cards: [
{
title: "Unión en Brillo",
icon: <Sun className="w-6 h-6" />,
shortText: "Convergencia",
modalTitle: "Los dos Yang se unen en Brillo",
modalContent: "No significa 'sumar', sino 'converger'. Es el Yang Qi concentrándose y consolidándose hacia adentro. Es lo opuesto a dispersarse. Representa el Cenit del Yang antes de descender."
},
{
title: "Raíz y Centro",
icon: <Layout className="w-6 h-6" />,
shortText: "Sequedad y Humedad",
modalTitle: "Estructura Raíz-Centro",
modalContent: "Raíz = Sequedad (Metal/Otoño).\nCentro = Taiyin (Tierra/Humedad).\n\nEl Estómago (Yangming) es la Tierra Seca, pero necesita la humedad del Bazo (Taiyin) en su centro para funcionar. Se trata 'desde el centro'."
},
{
title: "Sequedad (Metal)",
icon: <Wind className="w-6 h-6" />,
shortText: "Otoño y Descenso",
modalTitle: "Naturaleza de la Sequedad",
modalContent: "Yangming se asocia al Oeste y al Metal. El Metal es pesado y desciende. La sequedad fisiológica es necesaria para 'endurecer' y formar las heces, pero el calor excesivo la vuelve patológica."
}
]
}
},
{
id: "u3-c2",
title: "Canales y Órganos",
subtitle: "Capítulo 2",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
content: {
heading: "La Familia del Estómago",
description: "El 'Wei Jia' no es solo el órgano anatómico, sino un sistema funcional que incluye al Intestino Grueso y gobierna el descenso de todo lo turbio.",
cards: [
{
title: "Familia del Estómago",
icon: <User className="w-6 h-6" />,
shortText: "Sistema Digestivo",
modalTitle: "Wei Jia (Familia del Estómago)",
modalContent: "Incluye al Estómago y los 6 Intestinos (Fu). Funciona con la regla: 'Si el estómago está lleno, los intestinos vacíos'. Si ambos se llenan simultáneamente, hay enfermedad (exceso/bloqueo)."
},
{
title: "Ríos y Mares",
icon: <ArrowDownCircle className="w-6 h-6" />,
shortText: "Función de Descenso",
modalTitle: "Los Grandes Ríos",
modalContent: "Los 6 canales son ríos que desembocan en el mar (Estómago). Su función crítica es el DESCENSO. Si Yangming no desciende, el Qi se rebela hacia arriba (vómitos, reflujo)."
},
{
title: "Conexión Cerebral",
icon: <Brain className="w-6 h-6" />,
shortText: "Eje Intestino-Cerebro",
modalTitle: "Relación con el Shen",
modalContent: "El Estómago e Intestinos tienen conexión directa con el Cerebro ('Mar de la Médula'). Por eso, el calor en Yangming (estreñimiento severo) causa delirio, confusión y manía (visto en la clínica como 'locura por calor')."
}
]
}
},
{
id: "u3-c3",
title: "Patología Yangming",
subtitle: "Capítulo 3",
image: "https://images.unsplash.com/photo-1506369466222-428c6a9f36f8?auto=format&fit=crop&w=1200&q=80",
content: {
heading: "Los 4 Grandes",
description: "La enfermedad Yangming es el imperio del Calor y el Exceso. Es una lucha vigorosa donde el cuerpo aún tiene mucha energía.",
cards: [
{
title: "Los 4 Grandes",
icon: <Flame className="w-6 h-6" />,
shortText: "Síntomas Clave",
modalTitle: "Síndrome de los 4 Grandes",
modalContent: "1. Gran Fiebre (sin aversión al frío, aversión al calor).\n2. Gran Sed (deseo de agua fría).\n3. Gran Sudor (el calor expulsa líquidos).\n4. Gran Pulso (Desbordante/Hong Mai)."
},
{
title: "Calor vs Exceso",
icon: <Zap className="w-6 h-6" />,
shortText: "Tipos de Patología",
modalTitle: "Diferenciación",
modalContent: "Calor (Sin forma): Fiebre alta, sudor. Se trata con Bai Hu Tang (Yeso) para enfriar.\nExceso (Con forma): Heces secas, dolor abdominal, estreñimiento. Se trata con Cheng Qi Tang (Ruibarbo) para purgar."
},
{
title: "Rutas de Entrada",
icon: <ArrowRight className="w-6 h-6" />,
shortText: "Origen",
modalTitle: "Cómo llega a Yangming",
modalContent: "1. Desde Taiyang: Si se suda demasiado, se dañan los fluidos y se seca el interior (Constricción del Bazo).\n2. Desde Shaoyang: Tratamiento incorrecto de purga.\n3. Directo: Por comer alimentos muy calientes o constitución seca."
}
]
}
}
]
}
];

// --- Mapeo de Temas ---
const themes = {
blue: {
name: 'blue',
border: 'border-blue-500',
bg: 'bg-blue-500',
text: 'text-blue-400',
textDark: 'text-blue-500',
shadow: 'shadow-blue-900/20',
bgSoft: 'bg-blue-500/20',
},
orange: {
name: 'orange',
border: 'border-orange-500',
bg: 'bg-orange-500',
text: 'text-orange-400',
textDark: 'text-orange-500',
shadow: 'shadow-orange-900/20',
bgSoft: 'bg-orange-500/20',
}
};

// --- COMPONENTES ---

const SidebarItem = ({ unit, isActive, onClick, themeColor, onChapterClick }) => {
const t = themes[themeColor];

return (
<div className="mb-6">
    <div className="px-6 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
        {unit.title.split(":")[0]}
    </div>

    {/* Botón Principal de la Unidad */}
    <button onClick={onClick} className={`w-full flex items-center space-x-3 px-6 py-4 transition-all duration-300
        text-left border-l-4 ${ isActive ? `bg-slate-800 ${t.border} text-white shadow-lg ${t.shadow}`
        : 'border-transparent text-slate-400 hover:bg-slate-800 hover:text-slate-200' }`}>
        <div className={`p-1.5 rounded-lg transition-colors duration-300 ${isActive ? t.bg + ' text-white'
            : 'bg-slate-700 text-slate-400' }`}>
            <BookOpen size={16} />
        </div>
        <span className="font-medium text-sm truncate flex-1">
            {unit.description}
        </span>
        {isActive &&
        <CheckCircle2 size={16} className={`ml-2 transition-colors duration-300 ${themeColor==='blue'
            ? 'text-emerald-500' : 'text-orange-500' }`} />}
    </button>

    {/* Lista de Sub-unidades (Capítulos) */}
    {isActive && (
    <div className="mt-2 space-y-1 animate-in slide-in-from-top-2 fade-in duration-300">
        {unit.chapters.map((chapter) => (
        <button key={chapter.id} onClick={(e)=> {
            e.stopPropagation();
            onChapterClick(chapter.id);
            }}
            className="w-full flex items-center space-x-3 px-6 py-2.5 pl-14 text-left text-sm text-slate-400
            hover:text-white hover:bg-slate-800/50 transition-all group"
            >
            <div className={`w-1.5 h-1.5 rounded-full transition-colors ${t.bg} opacity-40 group-hover:opacity-100
                group-hover:scale-125`} />
            <span className="truncate text-xs font-medium tracking-wide">
                {chapter.subtitle}
            </span>
        </button>
        ))}
    </div>
    )}
</div>
);
};

const ExpandableCard = ({ card, isExpanded, onToggle, themeColor }) => {
const t = themes[themeColor];
const ringClass = themeColor === 'blue' ? 'ring-blue-500/30' : 'ring-orange-500/30';

return (
<div className={` relative rounded-2xl border cursor-pointer transition-all duration-500 ease-out flex flex-col h-full
    ${isExpanded ? `bg-slate-800 ${t.border} shadow-2xl ${t.shadow} scale-[1.02] z-10 ring-1 ${ringClass}`
    : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 hover:shadow-lg' } `}
    onClick={onToggle}>
    <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
                <div className={` p-3 rounded-lg border transition-all duration-500 ${isExpanded ? `${t.bgSoft}
                    ${t.border} ${t.text} rotate-[360deg]`
                    : 'bg-slate-900 border-slate-700 text-slate-400 group-hover:text-white' } `}>
                    {React.cloneElement(card.icon, { className: "w-6 h-6" })}
                </div>
                <div>
                    <h4 className={`text-lg font-bold transition-colors ${isExpanded ? 'text-white' : 'text-slate-200'
                        }`}>
                        {card.title}
                    </h4>
                </div>
            </div>

            <div className={` p-1.5 rounded-full transition-all duration-500 bg-slate-700/50 ${isExpanded ? `${t.bgSoft}
                ${t.text} rotate-180` : 'text-slate-500' } `}>
                <ChevronDown size={20} />
            </div>
        </div>

        <div className={`mb-2 ${isExpanded ? 'hidden' : 'block' }`}>
            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                {card.shortText}
            </span>
        </div>

        <div className={` transition-all duration-500 ease-in-out overflow-hidden flex-1 ${isExpanded
            ? 'max-h-96 opacity-100' : 'max-h-16 opacity-60' } `}>
            <p className={`text-slate-300 leading-relaxed transition-all duration-300 ${isExpanded ? 'text-base pt-2'
                : 'text-sm line-clamp-2' }`}>
                {isExpanded ? card.modalContent : card.modalContent.substring(0, 90) + "..."}
            </p>
        </div>

        {isExpanded && (
        <div
            className="mt-auto pt-4 border-t border-slate-700/50 flex justify-end animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className={`text-xs font-medium flex items-center gap-1.5 ${t.bgSoft} px-3 py-1 rounded-full border
                ${t.border} ${t.text}`}>
                <CheckCircle2 size={14} />
                Concepto clave
            </span>
        </div>
        )}
    </div>
</div>
);
};

const ChapterSection = ({ chapter, themeColor, id }) => {
const [expandedCardIndex, setExpandedCardIndex] = useState(null);
const t = themes[themeColor];

const handleCardToggle = (index) => {
setExpandedCardIndex(prev => prev === index ? null : index);
};

return (
<div id={id} className="mb-24 border-b border-slate-800 pb-12 last:border-0 scroll-mt-10">
    {/* Hero Chapter Card */}
    <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-black/50 group">
        <div className="absolute inset-0">
            <img src={chapter.image} alt="Background"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/95 to-transparent" />
        </div>

        <div className="relative z-10 p-8 lg:p-12 max-w-4xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${t.bgSoft} border ${t.border}
                ${t.text} text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm`}>
                <Bookmark size={12} />
                {chapter.subtitle}
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                {chapter.content.heading}
            </h2>

            <p className={`text-lg text-slate-300 leading-relaxed border-l-4 pl-6 ${t.border}`}>
                {chapter.content.description}
            </p>
        </div>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {chapter.content.cards.map((card, index) => (
        <ExpandableCard key={index} card={card} isExpanded={expandedCardIndex===index} onToggle={()=>
            handleCardToggle(index)}
            themeColor={themeColor}
            />
            ))}
    </div>
</div>
);
};

export default function App() {
const [activeUnitId, setActiveUnitId] = useState("u2");
const [sidebarOpen, setSidebarOpen] = useState(false);
const mainContentRef = useRef(null);

// Reset scroll when unit changes
useEffect(() => {
if (mainContentRef.current) {
mainContentRef.current.scrollTop = 0;
}
}, [activeUnitId]);

const handleChapterClick = (chapterId) => {
const element = document.getElementById(chapterId);
if (element) {
element.scrollIntoView({ behavior: 'smooth', block: 'start' });
setSidebarOpen(false); // Close mobile menu if open
}
};

const activeUnit = courseData.find(u => u.id === activeUnitId);
const currentTheme = activeUnit.theme;
const t = themes[currentTheme];

return (
<div
    className="flex h-screen w-full bg-[#0f172a] text-slate-200 font-sans overflow-hidden transition-colors duration-500">

    {/* Mobile Toggle */}
    <button
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-slate-800 text-white rounded-md shadow-lg border border-slate-700"
        onClick={()=> setSidebarOpen(!sidebarOpen)}
        >
        {sidebarOpen ?
        <X size={24} /> :
        <Menu size={24} />}
    </button>

    {/* Sidebar */}
    <aside className={` fixed inset-y-0 left-0 z-40 w-80 bg-[#1e293b] border-r border-slate-800 transform
        transition-transform duration-300 flex flex-col shadow-2xl lg:relative lg:translate-x-0 ${sidebarOpen
        ? 'translate-x-0' : '-translate-x-full' } `}>
        <div className="p-8 border-b border-slate-800 bg-[#1e293b]">
            <h1 className="text-xl font-bold text-white mb-1">Escuela Shen Ming</h1>
            <p className="text-slate-400 text-xs uppercase tracking-wider">Acupuntura Clásica</p>
        </div>

        {/* Menu con Unidades */}
        <nav className="flex-1 overflow-y-auto py-6 scrollbar-thin scrollbar-thumb-slate-700">
            {courseData.map((unit) => (
            <SidebarItem key={unit.id} unit={unit} isActive={unit.id===activeUnitId} themeColor={unit.theme}
                onClick={()=> {
                setActiveUnitId(unit.id);
                }}
                onChapterClick={handleChapterClick}
                />
                ))}
        </nav>

        {/* Footer de Progreso */}
        <div className="p-6 border-t border-slate-800 bg-[#162032]">
            <div className="flex justify-between items-center mb-2 text-xs text-slate-400">
                <span>Progreso General</span>
                <span>{activeUnitId === 'u2' ? '50%' : '85%'}</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5">
                <div className={`h-1.5 rounded-full transition-all duration-1000 ${t.bg}`} style={{ width:
                    activeUnitId==='u2' ? '50%' : '85%' }}></div>
            </div>
        </div>
    </aside>

    {/* Main Content - Scrollable Container */}
    <main ref={mainContentRef}
        className="flex-1 flex flex-col h-full relative overflow-y-auto bg-[#0f172a] scroll-smooth">
        <div className="p-6 lg:p-12 max-w-6xl mx-auto w-full">

            {/* Unit Header */}
            <div className="mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
                <span className={`${t.textDark} font-bold tracking-widest uppercase text-sm mb-2 block transition-colors
                    duration-300`}>
                    Unidad Actual
                </span>
                <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-4">
                    {activeUnit.title}
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl">
                    {activeUnit.description}
                </p>
            </div>

            {/* Render ALL chapters for the active unit (Long Scroll) */}
            <div className="space-y-12">
                {activeUnit.chapters.map((chapter, index) => (
                <div key={chapter.id} className="animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{
                    animationDelay: `${index * 200}ms` }}>
                    <ChapterSection id={chapter.id} chapter={chapter} themeColor={currentTheme} />
                </div>
                ))}
            </div>

            {/* Next Unit Teaser */}
            {activeUnitId === 'u2' && (
            <div className="py-12 text-center border-t border-slate-800 mt-12">
                <p className="text-slate-500 mb-4">Has completado la introducción a Taiyang</p>
                <button onClick={()=> {
                    setActiveUnitId('u3');
                    mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white
                    rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-blue-900/40`}
                    >
                    <span>Continuar a Unidad 3: Yangming</span>
                    <ArrowRight size={20} />
                </button>
            </div>
            )}

            {activeUnitId === 'u3' && (
            <div className="py-12 text-center border-t border-slate-800 mt-12">
                <div className={`inline-block p-4 rounded-full mb-4 ${t.bgSoft}`}>
                    <CheckCircle2 size={48} className={t.textDark} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Unidad Completada!</h3>
                <p className="text-slate-500">Has dominado los conceptos de Taiyang y Yangming.</p>
            </div>
            )}

        </div>
    </main>
</div>
);
}
