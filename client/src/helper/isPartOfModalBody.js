export default function isPartOfModalBody(node) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  while (node !== modal) {
    if (node.parentNode === modalBody || node === modalBody) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}
