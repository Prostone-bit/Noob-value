
// Fonction pour calculer la valeur d'échange
function calculateTradeValue(baseValue, gainValue, rarityMultiplier, rarity) {
    const efficiency = gainValue / (baseValue / 100); // Ratio gain/prix
    const rarityBonus = {
        'Commun': 1.0,
        'Uncommun': 1.3,
        'Rare': 1.6,
        'Épique': 2.0,
        'Légendaire': 2.5,
        'Mythique': 3.0,
        'Secret': 3.5,
        'Inconnu': 5.0
    };
    
    const rarityValue = rarityBonus[rarity] || 1.0;
    const tradeValue = Math.round(baseValue * efficiency * rarityValue * 0.8); // 80% de la valeur calculée
    return tradeValue;
}

const noobsData = {
    'poor-noob': {
        name: 'Poor Noob',
        image: 'static/images/poor-noob.png',
        price: '100$',
        gainPerSecond: '1$/s',
        rarity: 'Commun',
        description: 'Le plus gros des clodos, le plus pauvre',
        rarityMultiplier: 1.0,
        gainValue: 1,
        baseValue: 100,
        category: 'noobs',
        get tradeValue() { return calculateTradeValue(this.baseValue, this.gainValue, this.rarityMultiplier, this.rarity); }
    },
    'surf-noob': {
        name: 'Surf Noob',
        image: 'static/images/surf-noob.png',
        price: '200$',
        gainPerSecond: '2$/s',
        rarity: 'Commun',
        description: 'Maître des vagues et du surf',
        rarityMultiplier: 1.0,
        gainValue: 2,
        baseValue: 200,
        category: 'noobs',
        get tradeValue() { return calculateTradeValue(this.baseValue, this.gainValue, this.rarityMultiplier, this.rarity); }
    },
    'noob': {
        name: 'Noob',
        image: 'static/images/noob.png',
        price: '400$',
        gainPerSecond: '4$/s',
        rarity: 'Commun',
        description: 'Le noob classique et original',
        rarityMultiplier: 1.0,
        gainValue: 4,
        baseValue: 400,
        category: 'noobs',
        get tradeValue() { return calculateTradeValue(this.baseValue, this.gainValue, this.rarityMultiplier, this.rarity); }
    },
    'teacher-noob': {
        name: 'Teacher Noob',
        image: 'static/images/teacher-noob.png',
        price: '800$',
        gainPerSecond: '7$/s',
        rarity: 'Uncommun',
        description: 'Professeur nerd',
        rarityMultiplier: 1.2,
        gainValue: 7,
        baseValue: 800,
        category: 'noobs',
        get tradeValue() { return calculateTradeValue(this.baseValue, this.gainValue, this.rarityMultiplier, this.rarity); }
    },
    'magic-noob': {
        name: 'Magic Noob',
        image: 'static/images/magic-noob.png',
        price: '1,600$',
        gainPerSecond: '14$/s',
        rarity: 'Uncommun',
        description: 'Maîtrise les arts mystiques',
        rarityMultiplier: 1.2,
        gainValue: 14,
        baseValue: 1600,
        category: 'noobs',
        get tradeValue() { return calculateTradeValue(this.baseValue, this.gainValue, this.rarityMultiplier, this.rarity); }
    },
    'swat-noob': {
        name: 'Swat Noob',
        image: 'static/images/swat-noob.png',
        price: '3,200$',
        gainPerSecond: '28$/s',
        rarity: 'Uncommun',
        description: 'Expert en tactiques spéciales',
        rarityMultiplier: 1.2,
        gainValue: 28,
        baseValue: 3200,
        category: 'noobs',
        get tradeValue() { return calculateTradeValue(this.baseValue, this.gainValue, this.rarityMultiplier, this.rarity); }
    },
    'builder-noob': {
        name: 'Buildeur Noob',
        image: 'static/images/builder-noob.png',
        price: '6,000$',
        gainPerSecond: '50$/s',
        rarity: 'Uncommun',
        description: 'Construit des empires brick par brick',
        rarityMultiplier: 1.2,
        gainValue: 50,
        baseValue: 6000,
        category: 'noobs',
        get tradeValue() { return calculateTradeValue(this.baseValue, this.gainValue, this.rarityMultiplier, this.rarity); }
    },
    'ninja-noob': {
        name: 'Ninja Noob',
        image: 'static/images/ninja-noob.png',
        price: '12,000$',
        gainPerSecond: '95$/s',
        rarity: 'Rare',
        description: 'Maître des techniques furtives',
        rarityMultiplier: 1.5,
        gainValue: 95,
        baseValue: 12000,
        category: 'noobs',
        get tradeValue() { return calculateTradeValue(this.baseValue, this.gainValue, this.rarityMultiplier, this.rarity); }
    },
    'sleep-noob': {
        name: 'Sleeping Noob',
        image: 'static/images/sleep-noob.png',
        price: '24,000$',
        gainPerSecond: '190$/s',
        rarity: 'Rare',
        description: 'Génère des revenus même en dormant',
        rarityMultiplier: 1.5,
        gainValue: 190,
        baseValue: 24000,
        category: 'noobs',
        get tradeValue() { return calculateTradeValue(this.baseValue, this.gainValue, this.rarityMultiplier, this.rarity); }
    },
    'rich-noob': {
        name: 'Rich Noob',
        image: 'static/images/rich-noob.png',
        price: '50,000$',
        gainPerSecond: '350$/s',
        rarity: 'Rare',
        description: 'Aristocrate fortuné avec haut-de-forme',
        rarityMultiplier: 1.5,
        gainValue: 350,
        baseValue: 50000,
        category: 'noobs',
        get tradeValue() { return calculateTradeValue(this.baseValue, this.gainValue, this.rarityMultiplier, this.rarity); }
    },
    'boxer-noob': {
        name: 'Boxer Noob',
        image: 'static/images/boxer-noob.png',
        price: '100,000$',
        gainPerSecond: '700$/s',
        rarity: 'Rare',
        description: 'Champion de boxe aux poings redoutables',
        rarityMultiplier: 1.5,
        gainValue: 700,
        baseValue: 100000,
        category: 'noobs',
        get tradeValue() { return calculateTradeValue(this.baseValue, this.gainValue, this.rarityMultiplier, this.rarity); }
    },
    'hacker-noob': {
        name: 'Hacker Noob',
        image: 'static/images/hacker-noob.png',
        price: '250,000$',
        gainPerSecond: '1,500$/s',
        rarity: 'Legendaire',
        description: 'Pirate informatique aux compétences redoutables',
        rarityMultiplier: 2.0,
        gainValue: 1500,
        baseValue: 250000,
        category: 'noobs',
        get tradeValue() { return calculateTradeValue(this.baseValue, this.gainValue, this.rarityMultiplier, this.rarity); }
    },
    'king-noob': {
        name: 'King Noob',
        image: 'static/images/king-noob.png',
        price: '500,000$',
        gainPerSecond: '3,000$/s',
        rarity: 'Legendaire',
        description: 'Règne sur son royaume avec autorité',
        rarityMultiplier: 2.0,
        gainValue: 3000,
        baseValue: 500000,
        category: 'noobs',
        get tradeValue() { return calculateTradeValue(this.baseValue, this.gainValue, this.rarityMultiplier, this.rarity); }
    },
    'demon-noob': {
        name: 'Demon Noob',
        image: 'static/images/demon-noob.png',
        price: '1,000,000$',
        gainPerSecond: '6,000$/s',
        rarity: 'Legendaire',
        description: 'Maîtrise les forces obscures ancestrales',
        rarityMultiplier: 2.0,
        gainValue: 6000,
        baseValue: 1000000,
        category: 'noobs',
        get tradeValue() { return calculateTradeValue(this.baseValue, this.gainValue, this.rarityMultiplier, this.rarity); }
    },
    'god-noob': {
        name: 'God Noob',
        image: 'static/images/god-noob.png',
        price: '2,500,000$',
        gainPerSecond: '13,000$/s',
        rarity: 'Mythical',
        description: 'Entité divine aux pouvoirs absolus',
        rarityMultiplier: 4.0,
        gainValue: 13000,
        baseValue: 2500000,
        category: 'noobs',
        get tradeValue() { return calculateTradeValue(this.baseValue, this.gainValue, this.rarityMultiplier, this.rarity); }
    },
    'saiyan-noob': {
        name: 'Sayan Noob',
        image: 'static/images/saiyan-noob.png',
        price: '5,000,000$',
        gainPerSecond: '26,000$/s',
        rarity: 'Mythical',
        description: 'Guerrier légendaire aux pouvoirs infinis',
        rarityMultiplier: 4.0,
        gainValue: 26000,
        baseValue: 5000000,
        category: 'noobs',
        get tradeValue() { return calculateTradeValue(this.baseValue, this.gainValue, this.rarityMultiplier, this.rarity); }
    },
    'soldier-noob': {
        name: 'Noob Solider',
        image: 'static/images/soldier-noob.png',
        price: '12,000,000$',
        gainPerSecond: '60,000$/s',
        rarity: 'Secret',
        description: 'Vétéran militaire aux techniques de combat avancées',
        rarityMultiplier: 3.0,
        gainValue: 60000,
        baseValue: 12000000,
        category: 'noobs',
        get tradeValue() { return calculateTradeValue(this.baseValue, this.gainValue, this.rarityMultiplier, this.rarity); }
    },
    'noob-creators': {
        name: 'Noob Creators',
        image: 'static/images/noob-creators.png',
        price: '108,000,000$',
        gainPerSecond: '540,000$/s',
        rarity: 'Inconnu',
        description: 'Les créateurs originels du monde des Noobs, maîtres suprêmes de la création',
        rarityMultiplier: 5.0,
        gainValue: 540000,
        baseValue: 108000000,
        category: 'noobs',
        get tradeValue() { return calculateTradeValue(this.baseValue, this.gainValue, this.rarityMultiplier, this.rarity); }
    }
};

const mutationsData = {
    'default-mutation': {
        name: 'Default Mutation',
        image: 'static/images/golden-mutation.png',
        multiplier: 'x1.0',
        gainPerSecond: 'Multiplie tous les gains par 1.0',
        eventInfo: 'Mutation de base',
        description: 'Mutation de départ standard',
        category: 'mutations',
        rarityMultiplier: 1.0
    },
    'golden-mutation': {
        name: 'Golden Mutation',
        image: 'static/images/golden-mutation.png',
        multiplier: 'x1.2',
        gainPerSecond: 'Multiplie tous les gains par 1.2',
        eventInfo: 'Événement spécial',
        description: 'Transformation dorée légendaire',
        category: 'mutations',
        rarityMultiplier: 1.2
    },
    'rainbow-mutation': {
        name: 'Rainbow Mutation',
        image: 'static/images/rainbow-mutation.png',
        multiplier: 'x1.3',
        gainPerSecond: 'Multiplie tous les gains par 1.3',
        eventInfo: 'Ultra rare',
        description: 'Éclat multicolore mythique',
        category: 'mutations',
        rarityMultiplier: 1.3
    },
    'aura-mutation': {
        name: 'Aura Mutation',
        image: 'static/images/aura-mutation.png',
        multiplier: 'x1.3',
        gainPerSecond: 'Multiplie tous les gains par 1.3',
        eventInfo: 'Mutation mystique',
        description: 'Énergie spirituelle cosmique',
        category: 'mutations',
        rarityMultiplier: 1.3
    }
};

const modal = document.getElementById('noob-modal');
const closeBtn = document.querySelector('.close');
const modalImage = document.getElementById('modal-noob-image');
const modalName = document.getElementById('modal-noob-name');
const modalRarity = document.getElementById('modal-rarity-value');  
const modalPrice = document.getElementById('modal-price-value');   
const modalGain = document.getElementById('modal-gain-value');    
const modalDescription = document.getElementById('modal-description-value');

const categoryButtons = document.querySelectorAll('.category-btn');
const noobsGrid = document.querySelector('.noobs-grid');
const mutationsGrid = document.querySelector('.mutations-grid');
const searchInput = document.querySelector('.search-input');

const informationLink = document.getElementById('information-link');
const informationModal = document.getElementById('information-modal');
const informationClose = document.querySelector('.information-close');

const calculatorLink = document.getElementById('calculator-link');
const calculatorModal = document.getElementById('calculator-modal');
const calculatorClose = document.querySelector('.calculator-close');

const maintenanceLink = document.getElementById('maintenance-link');
const maintenanceModal = document.getElementById('maintenance-modal');
const maintenanceClose = document.querySelector('.maintenance-close');
const maintenancePopup = document.getElementById('maintenancePopup');

// Variables pour le calculateur
let tradeSlots = {
    you: [],
    them: []
};

let slotCounter = {
    you: 0,
    them: 0
};

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const noobsGrid = document.querySelector('.noobs-grid');
        const mutationsGrid = document.querySelector('.mutations-grid');
        
        if (category === 'noobs') {
            if (noobsGrid) noobsGrid.style.display = 'grid';
            if (mutationsGrid) mutationsGrid.style.display = 'none';
        } else {
            if (noobsGrid) noobsGrid.style.display = 'none';
            if (mutationsGrid) mutationsGrid.style.display = 'grid';
        }
        
        clearSearchOnCategoryChange();
    });
});


function showModal(noobId, data, isMutation = false) {
    if (!modalImage || !modalName || !modalPrice || !modalGain || !modalRarity || !modalDescription) {

        return;
    }
    
    modalImage.src = data.image;
    modalName.textContent = data.name;
    modalImage.alt = data.name;
    
    if (isMutation) {
        modalRarity.textContent = 'Mutation';
        modalPrice.textContent = data.multiplier;
        modalGain.textContent = data.gainPerSecond;
        modalDescription.textContent = data.description;
        
        const rarityLabel = document.querySelector('#modal-rarity-value').parentElement.querySelector('.stat-label');
        const priceLabel = document.querySelector('#modal-price-value').parentElement.querySelector('.stat-label');
        const gainLabel = document.querySelector('#modal-gain-value').parentElement.querySelector('.stat-label');
        const descLabel = document.querySelector('#modal-description-value').parentElement.querySelector('.stat-label');
        
        if (rarityLabel) rarityLabel.textContent = 'Type:';
        if (priceLabel) priceLabel.textContent = 'Multiplicateur:';
        if (gainLabel) gainLabel.textContent = 'Effet:';
        if (descLabel) descLabel.textContent = 'Description:';
    } else {

        const rarityLabel = document.querySelector('#modal-rarity-value').parentElement.querySelector('.stat-label');
        const priceLabel = document.querySelector('#modal-price-value').parentElement.querySelector('.stat-label');
        const gainLabel = document.querySelector('#modal-gain-value').parentElement.querySelector('.stat-label');
        const descLabel = document.querySelector('#modal-description-value').parentElement.querySelector('.stat-label');
        
        if (rarityLabel) rarityLabel.textContent = 'Rareté:';
        if (priceLabel) priceLabel.textContent = 'Prix:';
        if (gainLabel) gainLabel.textContent = 'Gain par seconde:';
        if (descLabel) descLabel.textContent = 'Description:';
        

        modalRarity.textContent = data.rarity;
        modalPrice.textContent = data.price;
        modalGain.textContent = data.gainPerSecond;
        modalDescription.textContent = data.description;
    }
    

    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        

        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            modalContent.style.animation = 'modalSlideIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        }
    }
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}


function updateNoobsGrid() {
    const noobsGrid = document.querySelector('.noobs-grid');
    if (!noobsGrid) return;
    
    noobsGrid.innerHTML = '';
    noobsGrid.style.display = 'grid';
    
    Object.keys(noobsData).forEach(noobId => {
        const noob = noobsData[noobId];
        const noobCard = createNoobCard(noobId, noob);
        noobsGrid.appendChild(noobCard);
    });
    
    attachCardEventListeners();
}


function updateMutationsGrid() {
    const mutationsGrid = document.querySelector('.mutations-grid');
    if (!mutationsGrid) return;
    
    mutationsGrid.innerHTML = '';
    mutationsGrid.style.display = 'none';
    
    Object.keys(mutationsData).forEach(mutationId => {
        const mutation = mutationsData[mutationId];
        const mutationCard = createMutationCard(mutationId, mutation);
        mutationsGrid.appendChild(mutationCard);
    });
    
    attachCardEventListeners();
}


function createNoobCard(noobId, noob) {
    const card = document.createElement('div');
    card.className = 'noob-card';
    card.setAttribute('data-noob-id', noobId);
    
    // Calculate trade value
    const tradeValue = noob.tradeValue || 0;
    
    const statusClass = 'available';
    const statusText = '● Disponible';
    
    card.innerHTML = `
        <div class="card-header">
            <span class="rarity">${noob.rarity}</span>
            <span class="name">${noob.name}</span>
            <span class="status ${statusClass}">${statusText}</span>
        </div>
        <div class="card-image">
            <img src="${noob.image}" alt="${noob.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%234a9eff%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22white%22>${noob.name}</text></svg>'">
        </div>
        <div class="card-stats">
            <div class="stat-row">
                <span class="label">Prix</span>
                <span class="label">Gain/sec</span>
            </div>
            <div class="stat-row values">
                <span class="value">${noob.price}</span>
                <span class="gain">${noob.gainPerSecond}</span>
            </div>
            <div class="stat-row trade-info">
                <span class="label">💰 Valeur Trade</span>
            </div>
            <div class="stat-row values">
                <span class="trade-value">${tradeValue.toLocaleString()}$</span>
            </div>
        </div>
    `;
    
    return card;
}


function createMutationCard(mutationId, mutation) {
    if (!mutation || !mutation.name) {
        return document.createElement('div');
    }
    
    const card = document.createElement('div');
    card.className = 'noob-card mutation-card';
    card.setAttribute('data-noob-id', mutationId);
    
    const statusClass = 'special';
    const statusText = '★ Spécial';
    
    const mutationImage = mutation.image || 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="%23ff4a4a"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white">Mutation</text></svg>';
    const mutationMultiplier = mutation.multiplier || 'x1.0';

    
    card.innerHTML = `
        <div class="card-header">
            <span class="rarity">Mutation</span>
            <span class="name">${mutation.name}</span>
            <span class="status ${statusClass}">${statusText}</span>
        </div>
        <div class="card-image">
            <img src="${mutationImage}" alt="${mutation.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23ff4a4a%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22white%22>${mutation.name}</text></svg>'">
        </div>
        <div class="card-stats">
            <div class="stat-row">
                <span class="label">Multiplicateur</span>
                <span class="label">Effet</span>
            </div>
            <div class="stat-row values">
                <span class="value">${mutationMultiplier}</span>
                <span class="effect">${mutation.gainPerSecond || 'Boost'}</span>
            </div>
        </div>
    `;
    
    return card;
}


function attachCardEventListeners() {
    const cards = document.querySelectorAll('.noob-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const noobId = card.getAttribute('data-noob-id');
            const isMutation = card.classList.contains('mutation-card');
            const data = isMutation ? mutationsData[noobId] : noobsData[noobId];
            
            if (data) {
                showModal(noobId, data, isMutation);
            }
        });
    });
}


if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});


function filterItems(searchTerm) {
    const currentCategory = document.querySelector('.category-btn.active').getAttribute('data-category');
    const activeGrid = currentCategory === 'noobs' ? noobsGrid : mutationsGrid;
    const cards = activeGrid.querySelectorAll('.noob-card');
    
    if (!searchTerm.trim()) {

        cards.forEach(card => {
            card.style.display = 'block';
        });
        return;
    }
    
    cards.forEach(card => {
        const name = card.querySelector('.name').textContent.toLowerCase();
        const rarity = card.querySelector('.rarity').textContent.toLowerCase();
        const isVisible = name.includes(searchTerm.toLowerCase()) || 
                         rarity.includes(searchTerm.toLowerCase());
        
        if (isVisible) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function clearSearchOnCategoryChange() {
    if (searchInput) {
        searchInput.value = '';
        filterItems('');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    
    // Initialisation du menu mobile
    initializeMobileMenu();
    
    updateNoobsGrid();
    updateMutationsGrid();
    
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterItems(e.target.value);
        });
    }
    
    
    if (informationLink && informationModal) {
        initializeInformation();
    }
    
    if (calculatorLink && calculatorModal) {
        initializeCalculator();
    }
    
    initializeMaintenance();
});


function initializeInformation() {
    if (informationLink) {
        informationLink.addEventListener('click', (e) => {
            e.preventDefault();
            informationModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (informationClose) {
        informationClose.addEventListener('click', () => {
            informationModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    

    window.addEventListener('click', (event) => {
        if (event.target === informationModal) {
            informationModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}


function initializeMaintenance() {
    updateLastUpdateTime();
    
    // Start real-time updates
    simulateRealTimeUpdates();
    setInterval(simulateRealTimeUpdates, 15000); // Update every 15 seconds
    
    // Update time every minute
    setInterval(updateLastUpdateTime, 60000);
    
    if (maintenanceLink) {
        maintenanceLink.addEventListener('click', (e) => {
            e.preventDefault();
            showMaintenancePopup();
        });
    }
    
    if (maintenanceClose) {
        maintenanceClose.addEventListener('click', closeMaintenanceModal);
    }
    
    window.addEventListener('click', (event) => {
        if (event.target === maintenanceModal) {
            closeMaintenanceModal();
        }
    });
}

function updateLastUpdateTime() {
    const lastUpdateElement = document.getElementById('last-update-time');
    if (lastUpdateElement) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit'
        });
        lastUpdateElement.textContent = timeString;
    }
}

function simulateRealTimeUpdates() {
    // Simulate real-time metric updates
    const playerCountElement = document.querySelector('#game-status .metric-value');
    const responseTimeElement = document.querySelector('#game-status .metric:nth-child(1) .metric-value');
    const scamRateElement = document.querySelector('#trading-status .metric:nth-child(2) .metric-value');
    
    if (playerCountElement) {
        // Simulate player count fluctuation
        const baseCount = 1247;
        const variation = Math.floor(Math.random() * 50) - 25;
        const newCount = Math.max(1200, baseCount + variation);
        playerCountElement.textContent = newCount.toLocaleString();
    }
    
    if (responseTimeElement) {
        // Simulate response time variation
        const baseTime = 45;
        const variation = Math.floor(Math.random() * 20) - 10;
        const newTime = Math.max(25, baseTime + variation);
        responseTimeElement.textContent = `~${newTime}ms`;
        
        // Update color based on performance
        responseTimeElement.className = 'metric-value';
        if (newTime < 50) {
            responseTimeElement.classList.add('good');
        } else if (newTime < 100) {
            responseTimeElement.classList.add('warning');
        } else {
            responseTimeElement.classList.add('error');
        }
    }
    
    if (scamRateElement) {
        // Simulate scam rate fluctuation
        const baseRate = 12;
        const variation = Math.floor(Math.random() * 4) - 2;
        const newRate = Math.max(8, Math.min(20, baseRate + variation));
        scamRateElement.textContent = `${newRate}%`;
        
        // Update color based on rate
        scamRateElement.className = 'metric-value';
        if (newRate < 10) {
            scamRateElement.classList.add('good');
        } else if (newRate < 15) {
            scamRateElement.classList.add('warning');
        } else {
            scamRateElement.classList.add('error');
        }
    }
}


function openMaintenanceModal() {
    if (maintenanceModal) {
        maintenanceModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        updateLastUpdateTime();
    }
}

function closeMaintenanceModal() {
    if (maintenanceModal) {
        maintenanceModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Functions for the maintenance popup
function showMaintenancePopup() {
    if (maintenancePopup) {
        maintenancePopup.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeMaintenancePopup() {
    if (maintenancePopup) {
        maintenancePopup.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}


function optimizeForMobile() {
    // Detect mobile device
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Add mobile-specific optimizations
        document.body.classList.add("mobile-optimized");
        
        // Optimize modal behavior for mobile
        const modals = document.querySelectorAll(".modal");
        modals.forEach(modal => {
            modal.addEventListener("touchstart", function(e) {
                if (e.target === modal) {
                    modal.style.display = "none";
                }
            });
        });
        
        // Optimize popup behavior for mobile
        const popups = document.querySelectorAll(".maintenance-popup");
        popups.forEach(popup => {
            popup.addEventListener("touchstart", function(e) {
                if (e.target === popup.querySelector(".popup-overlay")) {
                    popup.classList.remove("show");
                }
            });
        });
        
        // Improve touch interaction for status cards
        const statusCards = document.querySelectorAll(".status-card");
        statusCards.forEach(card => {
            card.addEventListener("touchstart", function() {
                this.style.transform = "translateY(-2px)";
            });
            
            card.addEventListener("touchend", function() {
                setTimeout(() => {
                    this.style.transform = "";
                }, 150);
            });
        });
    }
}

// Handle orientation changes
function handleOrientationChange() {
    setTimeout(() => {
        optimizeForMobile();
        // Recalculate any dynamic heights if needed
        const popupContents = document.querySelectorAll(".popup-content");
        popupContents.forEach(content => {
            const maxHeight = window.innerHeight * 0.85;
            content.style.maxHeight = `${maxHeight}px`;
        });
    }, 100);
}

// Listen for orientation changes and resize
window.addEventListener("orientationchange", handleOrientationChange);
window.addEventListener("resize", optimizeForMobile);

optimizeForMobile();

// Fonction pour le menu mobile
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Fermer le menu quand on clique sur un lien
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    mobileMenuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });
        
        // Fermer le menu si on clique en dehors
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 768 && 
                !mobileMenuToggle.contains(event.target) && 
                !navMenu.contains(event.target) && 
                navMenu.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Fonctions pour le calculateur
function initializeCalculator() {
    if (calculatorLink) {
        calculatorLink.addEventListener("click", (e) => {
            e.preventDefault();
            calculatorModal.style.display = "block";
            document.body.style.overflow = "hidden";
            setupTradeSlots();
            
            // Assurer le focus sur le modal pour le défilement
            const modalContent = document.querySelector('.calculator-modal-content');
            if (modalContent) {
                modalContent.scrollTop = 0;
                modalContent.focus();
                
                // Forcer le recalcul de la hauteur sur mobile
                if (window.innerWidth <= 768) {
                    setTimeout(() => {
                        modalContent.style.height = 'auto';
                        const maxHeight = window.innerHeight * 0.95;
                        modalContent.style.maxHeight = `${maxHeight}px`;
                    }, 100);
                }
            }
        });
    }
    
    if (calculatorClose) {
        calculatorClose.addEventListener("click", closeCalculatorModal);
        
        // Support tactile amélioré
        calculatorClose.addEventListener("touchstart", (e) => {
            e.preventDefault();
            calculatorClose.style.transform = "scale(0.95)";
        });
        
        calculatorClose.addEventListener("touchend", (e) => {
            e.preventDefault();
            calculatorClose.style.transform = "scale(1)";
            closeCalculatorModal();
        });
    }
    
    // Fermeture par clic en dehors (desktop et mobile)
    window.addEventListener("click", (event) => {
        if (event.target === calculatorModal) {
            closeCalculatorModal();
        }
    });
    
    // Support tactile pour fermeture mobile
    calculatorModal.addEventListener("touchstart", (event) => {
        if (event.target === calculatorModal) {
            closeCalculatorModal();
        }
    });
}

function closeCalculatorModal() {
    calculatorModal.style.display = "none";
    document.body.style.overflow = "auto";
    
    // Réinitialiser les slots
    tradeSlots = {
        you: [],
        them: []
    };
    slotCounter = {
        you: 0,
        them: 0
    };
    
    // Nettoyer les slots du DOM
    const youSlots = document.getElementById('you-slots');
    const themSlots = document.getElementById('them-slots');
    
    if (youSlots) {
        youSlots.innerHTML = '<div class="trade-slot add-slot" data-side="you"><span class="plus-icon">+</span></div>';
    }
    if (themSlots) {
        themSlots.innerHTML = '<div class="trade-slot add-slot" data-side="them"><span class="plus-icon">+</span></div>';
    }
    
    // Réinitialiser les calculs
    updateTradeCalculations();
    setupTradeSlots();
}

function setupTradeSlots() {
    const addSlots = document.querySelectorAll(".add-slot");
    
    addSlots.forEach(slot => {
        let touchHandled = false;
        
        // Support tactile pour mobile
        slot.addEventListener("touchstart", (e) => {
            touchHandled = true;
            e.preventDefault();
            slot.style.transform = "scale(0.95)";
            slot.style.background = "rgba(74, 158, 255, 0.3)";
        });
        
        slot.addEventListener("touchend", (e) => {
            e.preventDefault();
            if (touchHandled) {
                slot.style.transform = "scale(1)";
                slot.style.background = "rgba(74, 158, 255, 0.05)";
                
                const side = slot.dataset.side;
                openNoobSelector(slot, side);
                
                // Empêcher le click qui suit
                setTimeout(() => { touchHandled = false; }, 300);
            }
        });
        
        slot.addEventListener("touchcancel", (e) => {
            touchHandled = false;
            slot.style.transform = "scale(1)";
            slot.style.background = "rgba(74, 158, 255, 0.05)";
        });
        
        // Support click pour desktop
        slot.addEventListener("click", (e) => {
            if (!touchHandled) {
                e.preventDefault();
                const side = slot.dataset.side;
                openNoobSelector(slot, side);
            }
        });
    });
}

function openNoobSelector(targetSlot, side) {
    // Créer une modal de sélection de noobs
    const selectorModal = document.createElement("div");
    selectorModal.className = "noob-selector-modal";
    selectorModal.innerHTML = `
        <div class="noob-selector-content">
            <div style="position: sticky; top: 0; background: rgba(30, 35, 45, 0.95); backdrop-filter: blur(20px); z-index: 10; padding: 1rem; border-bottom: 1px solid rgba(74, 158, 255, 0.2); margin: -2rem -2rem 1rem -2rem; border-radius: 20px 20px 0 0;">
                <h3 style="margin: 0; text-align: center;">Sélectionner un Noob</h3>
                <button class="selector-close" style="position: absolute; top: 1rem; right: 1rem; background: rgba(229, 62, 62, 0.9); border: 2px solid rgba(255,255,255,0.3); color: white; width: 44px; height: 44px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; font-weight: bold; z-index: 9999; touch-action: manipulation;">&times;</button>
            </div>
            <div class="noob-selector-grid">
                ${Object.keys(noobsData).map(noobId => {
                    const noob = noobsData[noobId];
                    return `
                        <div class="noob-selector-item" data-noob-id="${noobId}">
                            <img src="${noob.image}" alt="${noob.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%234a9eff%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22white%22>${noob.name}</text></svg>'">
                            <div class="name">${noob.name}</div>
                            <div class="price">${noob.price}</div>
                        </div>
                    `;
                }).join("")}
            </div>
        </div>
    `;
    
    document.body.appendChild(selectorModal);
    selectorModal.style.display = "block";
    document.body.style.overflow = "hidden";
    
    // Focus sur le contenu pour permettre le défilement
    const selectorContent = selectorModal.querySelector('.noob-selector-content');
    selectorContent.scrollTop = 0;
    selectorContent.focus();
    
    // Fonction de fermeture ultra-robuste
    function closeSelectorModal() {
        try {
            // Supprimer immédiatement du DOM
            if (selectorModal && selectorModal.parentNode) {
                selectorModal.parentNode.removeChild(selectorModal);
            }
            // Restaurer le scroll
            document.body.style.overflow = "auto";
            
            // Nettoyer tous les modals de sélecteur qui pourraient rester
            const allSelectorModals = document.querySelectorAll('.noob-selector-modal');
            allSelectorModals.forEach(modal => {
                if (modal.parentNode) {
                    modal.parentNode.removeChild(modal);
                }
            });
        } catch (error) {
            console.log("Erreur lors de la fermeture:", error);
            document.body.style.overflow = "auto";
        }
    }
    
    // Bouton de fermeture simplifié et robuste
    const closeBtn = selectorModal.querySelector('.selector-close');
    
    // Fonction de fermeture directe
    function handleClose(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        closeSelectorModal();
    }
    
    // Événements simplifiés avec capture
    closeBtn.addEventListener("click", handleClose, true);
    closeBtn.addEventListener("touchstart", handleClose, true);
    closeBtn.addEventListener("mousedown", handleClose, true);
    
    // Alternative : gestionnaire sur le header entier pour la zone de fermeture
    const header = selectorModal.querySelector('div[style*="position: sticky"]');
    header.addEventListener("click", (e) => {
        // Si on clique dans la zone du bouton (côté droit)
        const rect = header.getBoundingClientRect();
        const clickX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
        if (clickX > rect.right - 80) { // Zone de 80px à droite
            handleClose(e);
        }
    }, true);
    
    // Variable globale pour gérer les événements tactiles
    let isProcessingSelection = false;
    
    // Fermeture modal en cliquant à l'extérieur
    selectorModal.addEventListener("click", (e) => {
        if (e.target.classList.contains("noob-selector-modal")) {
            closeSelectorModal();
        }
    });

    // Support tactile pour mobile - fermeture
    selectorModal.addEventListener("touchstart", (e) => {
        if (e.target.classList.contains("noob-selector-modal")) {
            closeSelectorModal();
        }
    });

    // Fonction unique pour sélectionner un noob
    function selectNoob(noobId) {
        if (isProcessingSelection) return;
        isProcessingSelection = true;
        
        const noob = noobsData[noobId];
        
        // Fermer immédiatement la modal
        closeSelectorModal();
        
        // Ajouter le noob après un court délai
        setTimeout(() => {
            addNoobToSide(side, noobId, noob);
            updateTradeCalculations();
            
            // Réinitialiser après un délai pour éviter les doubles clics
            setTimeout(() => {
                isProcessingSelection = false;
            }, 200);
        }, 50);
    }

    // Améliorer la réactivité tactile des éléments
    const selectorItems = selectorModal.querySelectorAll(".noob-selector-item");
    selectorItems.forEach(item => {
        let touchStarted = false;
        let touchHandled = false;
        
        item.addEventListener("touchstart", (e) => {
            touchStarted = true;
            touchHandled = false;
            item.style.background = "rgba(74, 158, 255, 0.3)";
            item.style.transform = "scale(0.95)";
        });
        
        item.addEventListener("touchend", (e) => {
            if (touchStarted && !touchHandled) {
                e.preventDefault();
                e.stopPropagation();
                touchHandled = true;
                
                item.style.background = "rgba(74, 158, 255, 0.1)";
                item.style.transform = "scale(1)";
                
                const noobId = item.dataset.noobId;
                selectNoob(noobId);
                
                // Empêcher le click qui suit
                setTimeout(() => { 
                    touchStarted = false;
                    touchHandled = false;
                }, 300);
            }
        });
        
        item.addEventListener("touchcancel", () => {
            touchStarted = false;
            touchHandled = false;
            item.style.background = "rgba(74, 158, 255, 0.1)";
            item.style.transform = "scale(1)";
        });
        
        // Support click pour desktop uniquement
        item.addEventListener("click", (e) => {
            if (!touchStarted && !touchHandled) {
                e.preventDefault();
                e.stopPropagation();
                const noobId = item.dataset.noobId;
                selectNoob(noobId);
            }
        });
    });
}

function addNoobToSide(side, noobId, noob) {
    const slotId = `${side}-${slotCounter[side]++}`;
    const slotsContainer = document.getElementById(`${side}-slots`);
    const addSlot = slotsContainer.querySelector('.add-slot');
    
    // Créer un nouveau slot avec le noob
    const newSlot = document.createElement('div');
    newSlot.className = 'trade-slot filled';
    newSlot.dataset.slotId = slotId;
    newSlot.dataset.noobId = noobId;
    newSlot.innerHTML = `
        <img src="${noob.image}" alt="${noob.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%234a9eff%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22white%22>${noob.name}</text></svg>'">
        <button class="remove-btn" onclick="removeNoobFromSlot(this, '${side}', '${slotId}')">×</button>
    `;
    
    // Insérer avant le bouton d'ajout
    slotsContainer.insertBefore(newSlot, addSlot);
    
    // Ajouter aux données
    tradeSlots[side].push({ slotId, noobId, noob });
    
    // Reconfigurer les événements des slots d'ajout
    setupTradeSlots();
}

function removeNoobFromSlot(button, side, slotId) {
    const slot = button.parentElement;
    
    // Supprimer le slot du DOM
    slot.remove();
    
    // Supprimer des données
    tradeSlots[side] = tradeSlots[side].filter(item => item.slotId !== slotId);
    
    // Reconfigurer les événements des slots d'ajout
    setupTradeSlots();
    
    updateTradeCalculations();
}

function updateTradeCalculations() {
    let youTotal = { price: 0, value: 0 };
    let themTotal = { price: 0, value: 0 };
    
    // Calculer votre côté
    tradeSlots.you.forEach(item => {
        const noob = item.noob;
        youTotal.price += noob.baseValue;
        youTotal.value += noob.tradeValue;
    });
    
    // Calculer leur côté
    tradeSlots.them.forEach(item => {
        const noob = item.noob;
        themTotal.price += noob.baseValue;
        themTotal.value += noob.tradeValue;
    });
    
    // Mettre à jour l'affichage avec formatage approprié
    document.getElementById("you-price").textContent = `$${youTotal.price.toLocaleString()}`;
    document.getElementById("you-value").textContent = youTotal.value.toLocaleString();
    document.getElementById("them-price").textContent = `$${themTotal.price.toLocaleString()}`;
    document.getElementById("them-value").textContent = themTotal.value.toLocaleString();
    
    // Calculer le verdict
    const difference = ((themTotal.value - youTotal.value) / Math.max(youTotal.value, 1)) * 100;
    const verdict = document.getElementById("trade-verdict");
    const differenceEl = document.getElementById("trade-difference");
    
    if (Math.abs(difference) <= 5) {
        verdict.textContent = "Échange équilibré";
        verdict.className = "verdict neutral";
    } else if (difference > 5) {
        verdict.textContent = "Bon deal pour vous !";
        verdict.className = "verdict win";
    } else {
        verdict.textContent = "Arnaque - Évitez !";
        verdict.className = "verdict loss";
    }
    
    differenceEl.textContent = `${Math.abs(difference).toFixed(1)}% de différence`;
}

