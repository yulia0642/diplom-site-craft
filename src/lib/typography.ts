// Типографика: предотвращение висячих предлогов
export function applyPrepositionsWrap(root: HTMLElement) {
  if (!root) return;
  
  try {
    // Полный список русских предлогов, союзов, частиц и коротких местоимений
    const SHORT_WORDS = [
      // Однобуквенные предлоги
      "в", "к", "о", "с", "у", "я",
      // Двухбуквенные предлоги и слова
      "во", "за", "из", "ко", "на", "не", "ни", "об", "от", "по", "со", "то",
      "он", "мы", "вы", "ты", "их", "ее", "его",
      // Трехбуквенные
      "без", "для", "или", "изо", "над", "обо", "про", "под",
      "она", "оно", "они", "мне", "мой", "моя", "мое", "мои", "что", "как", "где", "кто", "это", "эта", "эти", "тот",
      // Четырехбуквенные и длиннее
      "близ", "возле", "вокруг", "вроде", "кроме", "между", "перед", "после", 
      "сквозь", "среди", "через", "около", "вопреки", "благодаря", "согласно",
      "твой", "твоя", "твое", "твои", "наша", "наше", "наши", "ваша", "ваше", "ваши", "того", "чтоб", "чтобы",
      // Союзы и частицы
      "а", "и", "но", "да", "же", "ли", "бы", "ж"
    ];

    const nbsp = "\u00A0";
    
    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          
          const tag = parent.tagName;
          // Пропускаем служебные теги
          if (["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE", "TEXTAREA"].includes(tag)) {
            return NodeFilter.FILTER_REJECT;
          }
          
          // Проверяем наличие кириллицы
          if (!/[А-Яа-яЕе]/.test(node.nodeValue || "")) {
            return NodeFilter.FILTER_REJECT;
          }
          
          return NodeFilter.FILTER_ACCEPT;
        }
      } as unknown as NodeFilter
    );

    const nodes: Text[] = [];
    let n: Node | null = walker.nextNode();
    while (n) {
      nodes.push(n as Text);
      n = walker.nextNode();
    }

    nodes.forEach(node => {
      if (!node.nodeValue) return;
      
      let value = node.nodeValue;
      
      // Заменяем обычные пробелы после коротких слов на неразрывные
      SHORT_WORDS.forEach(word => {
        // Ищем короткое слово как отдельное слово (с границами слова) + пробел
        const regex = new RegExp(`(^|\\s)(${word})\\s+`, 'giu');
        // Важно: сохраняем исходный регистр (например, «Мы», «Я»), подставляя найденное значение ($2)
        value = value.replace(regex, `$1$2${nbsp}`);
      });
      
      if (value !== node.nodeValue) {
        node.nodeValue = value;
      }
    });
  } catch (e) {
    console.warn("Typography processing failed:", e);
  }
}

// Наблюдатель за изменениями DOM для повторной обработки типографики
export function initTypographyObserver(root: HTMLElement) {
  if (!root) return;
  
  // Первичная обработка
  applyPrepositionsWrap(root);
  
  // Настраиваем наблюдатель за изменениями
  const observer = new MutationObserver((mutations) => {
    let needsUpdate = false;
    
    for (const mutation of mutations) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        needsUpdate = true;
        break;
      }
      if (mutation.type === 'characterData') {
        needsUpdate = true;
        break;
      }
    }
    
    if (needsUpdate) {
      // Задержка для группировки множественных изменений
      setTimeout(() => applyPrepositionsWrap(root), 50);
    }
  });
  
  observer.observe(root, {
    childList: true,
    subtree: true,
    characterData: true
  });
  
  return observer;
}
