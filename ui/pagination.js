const totalPages = 10;
let currentPage = 1;

function createButton(text, page, isCurrent = false) {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = `pagination-button px-3 py-2 rounded-md text-sm font-medium ${
        isCurrent
            ? 'text-white bg-blue-600 border border-blue-600 hover:bg-blue-700'
            : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
    }`;
    button.setAttribute('aria-label', `Page ${page}`);
    if (isCurrent) {
        button.setAttribute('aria-current', 'page');
    }
    button.onclick = () => changePage(page);
    return button;
}

function createEllipsis() {
    const span = document.createElement('span');
    span.textContent = '...';
    span.className = 'px-3 py-2 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300';
    return span;
}

function renderPagination() {
    const paginationElement = document.getElementById('pagination');
    paginationElement.innerHTML = '';

    // Previous button
    const prevButton = document.createElement('button');
    prevButton.innerHTML = `
        <span class="sr-only">Previous</span>
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
    `;
    prevButton.className = `pagination-button px-3 py-2 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 ${
        currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
    }`;
    prevButton.setAttribute('aria-label', 'Previous page');
    prevButton.disabled = currentPage === 1;
    prevButton.onclick = () => changePage(currentPage - 1);
    paginationElement.appendChild(prevButton);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (
            i === 1 ||
            i === totalPages ||
            (i >= currentPage - 1 && i <= currentPage + 1) ||
            (i === currentPage - 2 && currentPage > 3) ||
            (i === currentPage + 2 && currentPage < totalPages - 2)
        ) {
            paginationElement.appendChild(createButton(i, i, i === currentPage));
        } else if (
            (i === currentPage - 3 && currentPage > 4) ||
            (i === currentPage + 3 && currentPage < totalPages - 3)
        ) {
            paginationElement.appendChild(createEllipsis());
        }
    }

    // Next button
    const nextButton = document.createElement('button');
    nextButton.innerHTML = `
        <span class="sr-only">Next</span>
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
    `;
    nextButton.className = `pagination-button px-3 py-2 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 ${
        currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
    }`;
    nextButton.setAttribute('aria-label', 'Next page');
    nextButton.disabled = currentPage === totalPages;
    nextButton.onclick = () => changePage(currentPage + 1);
    paginationElement.appendChild(nextButton);
}

function changePage(newPage) {
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        document.getElementById('currentPageDisplay').textContent = currentPage;
        renderPagination();
        // You can add your logic here to fetch data for the new page
        console.log(`Fetching data for page ${currentPage}`);
    }
}

// Initial render
renderPagination();