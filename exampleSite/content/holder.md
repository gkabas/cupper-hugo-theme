### Files 
<u>[SEA-Luzern](https://gkabas.netlify.app/files/ETS.pdf)</u> <br>

<div id="pdfViewer" style="width:100%; height:600px; border:1px solid #ccc;"></div>

<div style="text-align:center; margin-top:10px;">
  <button onclick="prevSlide()">❮ Previous</button>
  <button onclick="nextSlide()">Next ❯</button>
</div>
<script src="https://mozilla.github.io/pdf.js/build/pdf.js"></script>
<script src="https://mozilla.github.io/pdf.js/build/pdf.worker.js"></script>
<script>
  const url = 'https://gazikabas.netlify.app/files/presentation.pdf'; // Update this URL
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
    }).catch((error) => {
      console.error('Error rendering page:', error);
      pdfViewer.innerHTML = '<p>Error rendering this page.</p>';
    });
  };

  const loadPDF = () => {
    const loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise
      .then((pdf) => {
        pdfDoc = pdf;
        renderPage(pageNum);
      })
      .catch((error) => {
        console.error('Error loading PDF:', error);
        pdfViewer.innerHTML = '<p>Unable to load PDF. Please check the file URL.</p>';
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
