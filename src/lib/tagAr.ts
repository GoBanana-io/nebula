// Single source of truth for tag -> MSA Arabic title, rendered on /tags.
// Rule (AGENTS.md): any new tag introduced by a content batch MUST add its
// Arabic title to this map in the same change, or the tag renders
// English-only. Keep tag spelling identical across idea files so each
// sector shares one tag page.
export const tagArMap: Record<string, string> = {
  fintech: 'تكنولوجيا مالية',
  agritech: 'تكنولوجيا زراعية',
  logistics: 'لوجستيات وتوصيل',
  unicorn: 'شركات يونيكورن',
  failure: 'فشل',
  ecommerce: 'تجارة إلكترونية',
  proptech: 'تكنولوجيا عقارية',
  healthtech: 'تكنولوجيا صحية',
  diagnostics: 'تشخيص طبي',
  edtech: 'تعليم وتدريب',
  mobility: 'نقل ذكي',
  ai: 'ذكاء اصطناعي',
  marketplace: 'منصات وسيطة',
  climate: 'مناخ واستدامة',
  energy: 'طاقة ونفايات',
  b2b: 'تجارة بين الشركات',
  saas: 'برمجيات خدمية',
  payments: 'مدفوعات إلكترونية',
  egypt: 'مصر',
  syria: 'سوريا',
  ksa: 'السعودية',
  'saudi arabia': 'السعودية',
  contech: 'تكنولوجيا الإنشاءات',
  procurement: 'مشتريات وتوريد',
  govtech: 'تقنية حكومية',
  public: 'قطاع عام',
  hydrogen: 'هيدروجين',
  'hajj-umrah': 'حج وعمرة',
  'travel-tech': 'تكنولوجيا السفر',
  tourism: 'سياحة',
  delivery: 'توصيل وطلبات',
  cxm: 'تجربة العملاء',
  education: 'تعليم',
  foodtech: 'تكنولوجيا الأغذية',
  closed: 'شركات مغلقة',
  bnpl: 'اشترِ الآن وادفع لاحقًا',
  communications: 'اتصالات ومراسلات',
  'e-commerce': 'تجارة إلكترونية',
  'retail-tech': 'تكنولوجيا التجزئة',
  enablement: 'تمكين التجارة',
  qatar: 'قطر',
  media: 'إعلام',
  turkey: 'تركيا',
  gaming: 'ألعاب إلكترونية',
  'sports-tech': 'تكنولوجيا الرياضة',
  'assistive-tech': 'تقنية مساعدة',
  aviation: 'الطيران',
  climatetech: 'تكنولوجيا المناخ',
  'food-security': 'أمن غذائي',
  idea: 'مرحلة الفكرة',
  japan: 'اليابان',
  uae: 'الإمارات',
  jordan: 'الأردن',
  china: 'الصين',
  biotech: 'تكنولوجيا حيوية',
  semiconductors: 'أشباه الموصلات',
  ev: 'سيارات كهربائية',
};

// Tags that denote a country, not a sector/theme. The /tags index renders
// these in a separate "Countries" section with its own shape so they never
// share the sector sticker-cloud look.
export const countryTags = new Set([
  'egypt',
  'syria',
  'ksa',
  'saudi arabia',
  'qatar',
  'turkey',
  'uae',
  'japan',
  'jordan',
  'china',
]);

export const countryFlagMap: Record<string, string> = {
  egypt: '🇪🇬',
  syria: '🇸🇾',
  ksa: '🇸🇦',
  'saudi arabia': '🇸🇦',
  qatar: '🇶🇦',
  turkey: '🇹🇷',
  uae: '🇦🇪',
  japan: '🇯🇵',
  jordan: '🇯🇴',
  china: '🇨🇳',
};

// Display English name per country tag (tags use short codes like ksa/uae).
export const countryEnMap: Record<string, string> = {
  egypt: 'Egypt',
  syria: 'Syria',
  ksa: 'Saudi Arabia',
  'saudi arabia': 'Saudi Arabia',
  qatar: 'Qatar',
  turkey: 'Turkey',
  uae: 'United Arab Emirates',
  japan: 'Japan',
  jordan: 'Jordan',
  china: 'China',
};

// Per-country accent pair for the /tags country cards: soft wash behind the
// flag blob + saturated top ribbon. Small accents only, so near-family
// repeats (the two red-flag countries, the two green-flag countries) read
// as intentional.
export const countryAccentMap: Record<string, { wash: string; bar: string }> = {
  egypt: { wash: 'var(--color-amber-100)', bar: 'var(--color-amber-500)' },
  japan: { wash: 'var(--color-coral-100)', bar: 'var(--color-coral-500)' },
  turkey: { wash: 'var(--color-coral-200)', bar: 'var(--color-coral-600)' },
  ksa: { wash: 'var(--color-teal-100)', bar: 'var(--color-teal-500)' },
  'saudi arabia': { wash: 'var(--color-teal-100)', bar: 'var(--color-teal-500)' },
  qatar: { wash: 'var(--color-fuchsia-100)', bar: 'var(--color-fuchsia-500)' },
  syria: { wash: 'var(--color-violet-100)', bar: 'var(--color-violet-500)' },
  uae: { wash: 'var(--color-lime-100)', bar: 'var(--color-lime-500)' },
  jordan: { wash: 'var(--color-slate-100)', bar: 'var(--color-slate-500)' },
  china: { wash: 'var(--color-coral-50)', bar: 'var(--color-coral-700)' },
};
