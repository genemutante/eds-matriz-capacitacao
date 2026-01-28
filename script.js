// script.js - Versão com Filtros Pesquisáveis (Datalist)

const icons = {
    lupa: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>`,
    user: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>`,
    book: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>`,
    check: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>`,
    star: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>`,
    ban: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" /></svg>`,
    filterClear: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /><path stroke-linecap="round" stroke-linejoin="round" d="M3 3l18 18" /></svg>`
};

// CACHE DE PERFORMANCE
let colCache = {}; 
let lastHighlightedCol = null;

document.addEventListener('DOMContentLoaded', init);

function init() {
    if (typeof config === 'undefined') return;

    // --- 1. POPULAR DATALIST DE CARGOS ---
    const roleList = document.getElementById('roleList');
    if (roleList) {
        roleList.innerHTML = ''; // Limpa
        config.cargos.forEach(cargo => {
            const option = document.createElement('option');
            option.value = cargo.nome; // O valor visível é o nome
            // Guardamos o ID num atributo data (embora datalist não use isso nativamente, usaremos no JS)
            roleList.appendChild(option);
        });
    }

    // --- 2. POPULAR DATALIST DE CATEGORIAS ---
    const catList = document.getElementById('catList');
    if (catList) {
        catList.innerHTML = '';
        const categoriasUnicas = [...new Set(config.treinamentos.map(t => t.nome.split(':')[0]))];
        categoriasUnicas.sort().forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            catList.appendChild(option);
        });
    }

    // --- 3. POPULAR SELECT DE STATUS (Mantém igual) ---
    const statusSelect = document.getElementById('statusFilter'); 
    if (statusSelect) {
        statusSelect.innerHTML = `
            <option value="all">Todas</option>
            <option value="mandatory">Obrigatório</option>
            <option value="recommended">Recomendável</option>
            <option value="none">Não Obrigatório</option>
        `;
    }

    const btnClear = document.getElementById('btnClearFilters');
    if (btnClear) btnClear.innerHTML = icons.filterClear;
    
    atualizarFiltros(); 
}

// Helper: Converter Nome do Cargo em ID
function getCargoIdByName(nome) {
    if (!nome) return 'all';
    const cargo = config.cargos.find(c => c.nome === nome);
    return cargo ? cargo.id.toString() : 'all';
}

function atualizarFiltroHUD(cargoId, categoria, obrigatoriedade) {
    const tagRole = document.getElementById('tagRole');
    const tagCat = document.getElementById('tagCategory');
    const tagStatus = document.getElementById('tagStatus');
    const tagStatusContainer = document.getElementById('tagStatusContainer');
    const hudDividerStatus = document.getElementById('hudDividerStatus');

    // 1. Definição do Texto do Cargo
    let roleText = "Todos";
    if (cargoId !== 'all') {
        const cargoObj = config.cargos.find(c => c.id.toString() === cargoId);
        if (cargoObj) roleText = cargoObj.nome;
    }
    tagRole.textContent = roleText;
    tagRole.style.color = "#3b82f6"; 

    // 2. Atualização da Categoria
    tagCat.textContent = categoria === '' || categoria === 'all' ? "Todas" : categoria;
    tagCat.style.color = "#3b82f6"; 

    // 3. Atualização da Obrigatoriedade
    const obrigatoriedadeMap = { 
        mandatory: 'Obrigatório', 
        recommended: 'Recomendável',
        none: 'Não Obrigatório', 
        all: 'Todas' 
    };
    
    tagStatus.textContent = obrigatoriedadeMap[obrigatoriedade] || "Todas";
    tagStatus.style.color = "#3b82f6"; 
    
    const labelTitulo = tagStatusContainer ? tagStatusContainer.querySelector('.hud-label') : null;
    if(labelTitulo) labelTitulo.textContent = "OBRIGATORIEDADE";

    if (tagStatusContainer) tagStatusContainer.classList.remove('hidden');
    if (hudDividerStatus) hudDividerStatus.classList.remove('hidden');
}

function atualizarFiltros(valorCargoClick) {
    // --- LÓGICA DE TOGGLE (LIGAR/DESLIGAR) ---
    // Se a função foi chamada pelo clique na coluna (valorCargoClick existe)
    if (valorCargoClick !== undefined) {
        const cargoObj = config.cargos.find(c => c.id.toString() === valorCargoClick);
        const inputRole = document.getElementById('roleFilter');

        if (cargoObj) {
            // VERIFICAÇÃO: O input já está com o nome desse cargo?
            if (inputRole.value === cargoObj.nome) {
                // SIM -> Então o usuário quer DESMARCAR (Limpar filtro)
                inputRole.value = ''; 
            } else {
                // NÃO -> Então o usuário quer SELECIONAR esse cargo
                inputRole.value = cargoObj.nome;
            }
        }
    }

    // --- LEITURA DOS INPUTS (Continua igual) ---
    const roleName = document.getElementById('roleFilter').value;
    const roleVal = getCargoIdByName(roleName); // Converte Nome -> ID

    let catVal = document.getElementById('categoryFilter').value;
    if (catVal === '') catVal = 'all'; 

    const obrigSelect = document.getElementById('statusFilter');
    const statusWrapper = document.getElementById('statusWrapper'); 
    const textVal = document.getElementById('textSearch').value.toLowerCase();

    // Lógica de Visibilidade do Status
    if (roleVal === 'all') {
        if (statusWrapper) statusWrapper.style.display = 'none';
        obrigSelect.value = 'all';
        obrigSelect.disabled = true;
    } else {
        if (statusWrapper) statusWrapper.style.display = 'flex';
        obrigSelect.disabled = false;
    }

    atualizarFiltroHUD(roleVal, catVal, obrigSelect.value);
    renderizarMatriz(roleVal, catVal, textVal, obrigSelect.value);
}
function limparFiltros() {
    // Limpa Inputs de Texto
    document.getElementById('roleFilter').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('textSearch').value = '';
    
    // Reseta Select
    document.getElementById('statusFilter').value = 'all';

    const obrigSelect = document.getElementById('statusFilter');
    const statusWrapper = document.getElementById('statusWrapper');

    if (statusWrapper) statusWrapper.style.display = 'none';
    if (obrigSelect) obrigSelect.disabled = true;

    const tagStatusContainer = document.getElementById('tagStatusContainer');
    const hudDividerStatus = document.getElementById('hudDividerStatus');
    if (tagStatusContainer) tagStatusContainer.classList.add('hidden');
    if (hudDividerStatus) hudDividerStatus.classList.add('hidden');

    atualizarFiltros();
}

function renderizarMatriz(filtroCargo, filtroCategoria, filtroTexto, filtroObrigatoriedade) {
    const table = document.getElementById('matrixTable');
    if (!table) return;
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');

    // Reset do Cache
    colCache = {}; 
    lastHighlightedCol = null;

    let headerHTML = '<tr><th class="top-left-corner"><div class="hud-card">' +
    '<div class="hud-top-label">' + icons.lupa + ' INSPEÇÃO</div>' +
    '<div id="hudScan" class="hud-scan">' +
        '<div class="scan-icon-large">' + icons.lupa + '</div>' +
        '<div class="scan-msg">Explore a matriz<br>para ver detalhes</div>' +
    '</div>' +
    '<div id="hudData" class="hud-data-state animate-entry" style="display:none;">' +
        '<div id="hudBody" class="hud-body">' + 
            '<div class="hud-group">' +
                '<div class="hud-label-row"><div class="hud-icon">' + icons.user + '</div><span class="info-label">Cargo</span></div>' +
                '<div id="hudRole" class="info-value role-value">-</div>' + 
            '</div>' +
            '<div class="hud-group">' +
                '<div class="hud-label-row"><div class="hud-icon">' + icons.book + '</div><span class="info-label">Treinamento</span></div>' +
                '<div id="hudCourse" class="info-value">-</div>' +
            '</div>' +
        '</div>' +
    '</div>' + 
    '<div id="hudStatus" class="hud-footer status-bg-none">' + icons.ban + ' Selecione</div>' +
    '</div></th>';
    
    config.cargos.forEach((cargo, index) => {
        if (filtroCargo !== 'all' && cargo.id.toString() !== filtroCargo) return;
        const isSelected = (filtroCargo === cargo.id.toString());
        const activeClass = isSelected ? 'selected-col-header' : '';
        headerHTML += `<th class="${activeClass}" data-col="${index}" onclick="atualizarFiltros('${cargo.id}')"><div class="role-wrapper ${cargo.corClass}"><div class="vertical-text">${cargo.nome}</div></div></th>`;
    });
    headerHTML += '</tr>';
    thead.innerHTML = headerHTML;

    let bodyHTML = '';
    config.treinamentos.forEach((treino, treinoIndex) => {
        if (filtroCategoria !== 'all' && !treino.nome.startsWith(filtroCategoria)) return;
        if (filtroTexto && !treino.nome.toLowerCase().includes(filtroTexto)) return;

        let rowCellsHTML = '';
        let linhaPassa = (filtroObrigatoriedade === 'all'); 

        config.cargos.forEach((cargo, index) => {
            if (filtroCargo !== 'all' && cargo.id.toString() !== filtroCargo) return;
            const ehO = cargo.obrigatorios?.includes(treino.id);
            const ehR = cargo.recomendados?.includes(treino.id);
            let tipoReq = ehO ? 'mandatory' : (ehR ? 'recommended' : 'none');
            if (filtroObrigatoriedade !== 'all' && tipoReq === filtroObrigatoriedade) linhaPassa = true;
            const isSelected = (filtroCargo === cargo.id.toString());
            const activeClassCell = isSelected ? 'selected-col' : '';
            rowCellsHTML += `<td class="${activeClassCell}" data-col="${index}" data-status="${tipoReq}"><div class="cell-content">${ehO ? '<span class="status-dot O"></span>' : (ehR ? '<span class="status-dot R"></span>' : '')}</div></td>`;
        });

        if (linhaPassa) {
            const tooltipText = treino.desc ? treino.desc : "Sem descrição disponível.";
            
            // MUDANÇA CRUCIAL: Adicionamos a div .cell-truncate dentro do TH
            bodyHTML += `<tr data-row="${treinoIndex}"><th style="--cat-color: ${treino.color}" data-tooltip="${tooltipText}"><div class="cell-truncate">${treino.nome}</div></th>${rowCellsHTML}</tr>`;
        }
    });
    tbody.innerHTML = bodyHTML;
    
    const allCells = table.querySelectorAll('[data-col]');
    allCells.forEach(cell => {
        const cIndex = cell.dataset.col;
        if (!colCache[cIndex]) colCache[cIndex] = [];
        colCache[cIndex].push(cell);
    });

    vincularEventosLupa();
    vincularEventosDestaque();
}


function vincularEventosLupa() {
    const table = document.getElementById('matrixTable');
    if (!table) return;

    table.onmouseover = (e) => {
        const target = e.target;
        const td = target.closest('td');
        const thRow = target.closest('tbody th'); 
        const thCol = target.closest('thead th');

        if (!td && !thRow && !thCol) return;

        const hudScan = document.getElementById('hudScan');
        const hudData = document.getElementById('hudData');
        const hudRole = document.getElementById('hudRole');
        const hudCourse = document.getElementById('hudCourse');
        const hudStatus = document.getElementById('hudStatus');
        const hudBody = document.getElementById('hudBody'); 

        if (!hudData) return;

        const getCleanCourseName = (rowIndex) => {
            const fullName = config.treinamentos[rowIndex].nome;
            return fullName.includes(':') ? fullName.substring(fullName.indexOf(':') + 1).trim() : fullName;
        };

        const resetBackgroundClasses = () => {
            hudBody.classList.remove('bg-mandatory', 'bg-recommended', 'bg-none');
        };

        if (td && td.dataset.col) {
            const colIndex = parseInt(td.dataset.col);
            const tr = td.closest('tr');
            const rowIndex = parseInt(tr.dataset.row);
            const tipoReq = td.dataset.status;

            hudScan.style.display = 'none';
            hudData.style.display = 'flex';

            hudRole.textContent = config.cargos[colIndex].nome;
            hudCourse.textContent = getCleanCourseName(rowIndex);

            resetBackgroundClasses();
            if (tipoReq === 'mandatory') {
                hudBody.classList.add('bg-mandatory');
            } else if (tipoReq === 'recommended') {
                hudBody.classList.add('bg-recommended');
            } else {
                hudBody.classList.add('bg-none');
            }

            hudStatus.className = 'hud-footer status-bg-' + tipoReq;
            if (tipoReq === 'mandatory') {
                hudStatus.innerHTML = `${icons.check} Obrigatório`;
            } else if (tipoReq === 'recommended') {
                hudStatus.innerHTML = `${icons.star} Recomendável`;
            } else {
                hudStatus.innerHTML = `${icons.ban} Não Obrigatório`;
            }
        } 
        else if (thRow && thRow.parentElement.dataset.row) {
            const rowIndex = parseInt(thRow.parentElement.dataset.row);
            hudScan.style.display = 'none';
            hudData.style.display = 'flex';
            hudRole.textContent = "-";
            hudCourse.textContent = getCleanCourseName(rowIndex);
            
            resetBackgroundClasses();
            hudBody.classList.add('bg-none');
            
            hudStatus.className = 'hud-footer status-bg-none';
            hudStatus.innerHTML = `${icons.ban} Selecione um Cargo`;
        }
        else if (thCol && thCol.dataset.col) {
            const colIndex = parseInt(thCol.dataset.col);
            hudScan.style.display = 'none';
            hudData.style.display = 'flex';
            hudRole.textContent = config.cargos[colIndex].nome;
            hudCourse.textContent = "-";
            resetBackgroundClasses();
            hudBody.classList.add('bg-none');
            hudStatus.className = 'hud-footer status-bg-none';
            hudStatus.innerHTML = `${icons.user} Visualizando Cargo`;
        }
    };
    
    table.onmouseleave = () => {
        const hudScan = document.getElementById('hudScan');
        const hudData = document.getElementById('hudData');
        const hudStatus = document.getElementById('hudStatus');
        if (hudScan && hudData) {
            hudScan.style.display = 'flex';
            hudData.style.display = 'none';
            if (hudStatus) {
                hudStatus.className = 'hud-footer status-bg-none';
                hudStatus.innerHTML = `${icons.ban} Selecione`;
            }
        }
    };
}

function vincularEventosDestaque() {
    const table = document.getElementById('matrixTable');
    if (!table) return;
    table.removeEventListener('mouseover', handleMouseOverOpt);
    table.removeEventListener('mouseleave', limparDestaqueOpt);
    table.addEventListener('mouseover', handleMouseOverOpt);
    table.addEventListener('mouseleave', limparDestaqueOpt);
}

function handleMouseOverOpt(e) {
    const target = e.target;
    const el = target.closest('[data-col]');
    if (!el) {
        if (lastHighlightedCol !== null) limparDestaqueOpt();
        return;
    }
    const newColIndex = el.dataset.col;
    if (lastHighlightedCol === newColIndex) return;
    limparDestaqueOpt();
    destacarColunaOpt(newColIndex);
}

function destacarColunaOpt(index) {
    lastHighlightedCol = index;
    const cellsToHighlight = colCache[index];
    if (cellsToHighlight) {
        for (let i = 0; i < cellsToHighlight.length; i++) {
            const cell = cellsToHighlight[i];
            if (cell.tagName === 'TH') {
                cell.classList.add('hover-col-header');
            } else {
                cell.classList.add('hover-col');
            }
        }
    }
}

function limparDestaqueOpt() {
    if (lastHighlightedCol !== null) {
        const cellsToClear = colCache[lastHighlightedCol];
        if (cellsToClear) {
            for (let i = 0; i < cellsToClear.length; i++) {
                const cell = cellsToClear[i];
                cell.classList.remove('hover-col', 'hover-col-header');
            }
        }
        lastHighlightedCol = null;
    }
}