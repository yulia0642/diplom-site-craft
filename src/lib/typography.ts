export function applyPrepositionsWrap(root: HTMLElement) {
  if (!root) return;
  try {
    const PREPOSITIONS = [
      // one-letter
      "в","к","с","у","о",
      // common multi-letter
      "во","ко","со","об","обо","на","по","из","от","до","для","при","над","под","перед","через","про","между","после","около","среди"
    ];
    // Match preposition at word boundary followed by spaces before next non-space character
    const regex = new RegExp(`(^|[^\\/\wА-Яа-яЁё])((?:${PREPOSITIONS.join("|")})\u0020+)(?=[^\u0020])`,`giu`);

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          const tag = parent.tagName;
          if (["SCRIPT","STYLE","NOSCRIPT","CODE","PRE"].includes(tag)) {
            return NodeFilter.FILTER_REJECT;
          }
          // Skip if no Russian letters to avoid unnecessary work
          if (!/[А-Яа-яЁё]/.test(node.nodeValue || "")) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      } as unknown as NodeFilter
    );

    const nbsp = "\u00A0";

    const nodes: Text[] = [];
    let n: Node | null = walker.nextNode();
    while (n) {
      nodes.push(n as Text);
      n = walker.nextNode();
    }

    nodes.forEach(node => {
      const value = node.nodeValue || "";
      // Replace spaces after prepositions with NBSP to move pair to next line when needed
      const replaced = value.replace(/\b(в|во|на|по|из|от|до|для|при|над|под|перед|через|о|об|обо|с|со|к|ко|у)\s+/giu, (m) => m.replace(/\s+$/u, nbsp));
      if (replaced !== value) node.nodeValue = replaced;
    });
  } catch (e) {
    // Fail silently - typography is non-critical
    console.warn("Typography processing failed", e);
  }
}
