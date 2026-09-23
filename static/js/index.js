'use strict';

const copyButton = document.getElementById('copy-bibtex');
const citation = document.getElementById('bibtex');
const copyStatus = document.getElementById('copy-status');

if (copyButton && citation && copyStatus) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(citation.textContent.trim());
      copyStatus.textContent = 'BibTeX copied to clipboard.';
    } catch {
      // Keep the citation usable when clipboard access is unavailable or denied.
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(citation);
      selection.removeAllRanges();
      selection.addRange(range);
      copyStatus.textContent = 'Select and copy the highlighted citation with Ctrl+C or ⌘C.';
    }
  });
}
