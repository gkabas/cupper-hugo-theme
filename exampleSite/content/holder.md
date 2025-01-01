### Files 
<u>[SEA-Luzern](https://gkabas.netlify.app/files/ETS.pdf)</u> <br>

<div id="pdfViewer" style="width:50%; height:auto; border:1px solid #ccc;"></div>

<div style="text-align:center; margin-top:10px;">
  <button onclick="prevSlide()">❮ Previous</button>
  <button onclick="nextSlide()">Next ❯</button>
</div>

<script type="module">
  import * as pdfjsLib from '/js/pdfjs/pdf.mjs';
  pdfjsLib.GlobalWorkerOptions.workerSrc = '/js/pdfjs/pdf.worker.mjs';

  const url = 'https://gazikabas.netlify.app/files/ETS.pdf'; // PDF URL
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

  window.prevSlide = function() {
    if (pageNum <= 1) return;
    pageNum--;
    renderPage(pageNum);
  };

  window.nextSlide = function() {
    if (pageNum >= pdfDoc.numPages) return;
    pageNum++;
    renderPage(pageNum);
  };

  loadPDF();
</script>

