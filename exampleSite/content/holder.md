### Files 
<u>[SEA-Luzern](https://gkabas.netlify.app/files/ETS.pdf)</u> <br>

<button id="main-results-fig5" onclick="abs5()">Abstract</button> <button id="main-results-res5" onclick="showPDF2()">Main Results</button> <button id="main-results-pres5" onclick="pres5()">Presentations</button> <buttonSSRN onclick="ssrn5()">SSRN</buttonSSRN>
<buttonPDF onclick="pdf5()">PDF</buttonPDF>

<div id="abs6"><TT>
We identify and study two mechanisms that can overturn the stabilizing effects of unemployment insurance (UI) policies. First, households in economies with more generous UI reduce their precautionary savings and borrow more in the mortgage market. Second, the overall share of mortgages as well as the share of mortgages with higher loan-to-income ratios on bank balance sheets increase. As a result, both bank and household balance sheets become more vulnerable to adverse shocks, which deepens recessions. We demonstrate the importance of these channels by employing a quantitative heterogeneous-agent general equilibrium model and by providing county-level empirical evidence from the U.S. housing and mortgage markets.</TT>
</div>

<div id="pres6"><TT>
Bank of Canada, BIS, Ghent University, Indiana University, Lancaster University, Minneapolis Fed, Philly Fed, St. Louis Fed, University of Zurich, University of Liverpool, Barcelona Summer Forum, CEMLA/Dallas Fed Financial Stability Workshop, European Economic Association Conference, Econometric Society Meetings (North America and Asian), IFABS Conference, IBEFA Summer Meeting, Leuven Summer Event, Lisbon Macro Workshop, Midwest Finance Association Conference, Money, Macro and Finance Conference, SITE Conference, Swiss Society of Economics and Statistics Conference, T2M Macro Conference, Workshop in Empirical and Theoretical Macroeconomics (King’s College London), University of St. Gallen Workshop on Macroeconomic Implications of Housing, Household Finances, and Wealth Dynamics</TT>
</div>


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

