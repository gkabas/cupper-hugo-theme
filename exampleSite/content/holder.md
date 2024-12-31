### Files 
<u>[SEA-Luzern](https://gkabas.netlify.app/files/ETS.pdf)</u> <br>

<div id="pdfViewer" style="width:100%; height:600px; border:1px solid #ccc;"></div>

<div style="text-align:center; margin-top:10px;">
  <button onclick="prevSlide()">❮ Previous</button>
  <button onclick="nextSlide()">Next ❯</button>
</div>

<script>
  const url = 'https://raw.githubusercontent.com/gkabas/cupper-hugo-theme/master/static/files/ETS.pdf'; // Path to your PDF
  const pdfViewer = document.getElementById('pdfViewer');
  let pdfDoc = null;
  let pageNum = 1;

  const renderPage = (num) => {
    pdfDoc.getPage(num).then((page) => {
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      pdfViewer.innerHTML = ''; // Clear the viewer
      pdfViewer.appendChild(canvas);

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      page.render(renderContext);
    });
  };

  const loadPDF = () => {
    const loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then((pdf) => {
      pdfDoc = pdf;
      renderPage(pageNum);
    });
  };

  const prevSlide = () => {
    if (pageNum <= 1) return;
    pageNum--;
    renderPage(pageNum);
  };

  const nextSlide = () => {
    if (pageNum >= pdfDoc.numPages) return;
    pageNum++;
    renderPage(pageNum);
  };

  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://mozilla.github.io/pdf.js/build/pdf.worker.js';
  loadPDF();
</script>
