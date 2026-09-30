// Products Data for Ariselux Light Towers
// Matching the structure of lightingtowers.in (e.g. Qube Power Max)

export const productsData = {
  'ace-lt-12000': {
    id: 'ace-lt-12000',
    title: 'ACE LT 12000',
    category: 'diesel',
    categoryName: 'Diesel Powered',
    tagline: 'Heavy-Duty Industrial Diesel Lighting Tower',
    description: 'The ACE LT 12000 is meticulously designed to thrive in a spectrum of demanding applications. Featuring a robust Escort Kubota water-cooled diesel engine, a massive fuel tank, and a certified heavy-duty chassis, this equipment stands as a testament to durability and reliability. It finds its niche in the fields of mining and quarry, oil and gas, as well as large-scale infrastructure projects such as dams, bridges, and expressways. Furthermore, it is well-suited for the exacting requirements of military, defense, and disaster relief applications. Its power and adaptability position it as an indispensable asset for heavy industry.',
    image: '/images/products/Diesel oprated/ACLT 12000.png',
    gallery: [
      '/images/products/Diesel oprated/ACLT 12000.png',
      '/images/products/Diesel oprated/ACLT 9000.png',
      '/images/products/Diesel oprated/ACLT 6000.png'
    ],
    featureImage: '/images/industries/mining.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '39 ft (12 m)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '4 x 420W / 500W LED', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '80+ hours', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '8000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: 'Escort Kubota 14.5 HP (1500 / 1800 rpm) Water-Cooled',
        generator: 'NSM / Linz Brushless (6 kW @ 50 Hz / 7.5 kW @ 60 Hz)',
        tankSize: '100 Liters (Diesel)',
        sockets: 'Output: 2 x 16A 3-pin IP65 | Input: 1 x 16A 3-pin',
        weight: '980 kg',
        dimensions: 'Travel: 2.3 x 1.4 x 2.4 m\nOperation: 2.6 x 2.4 x 12.0 m'
      },
      {
        engine: 'Lombardini / Mitsubishi Multi-Cylinder Diesel',
        generator: 'Linz Electric Synchronous (8 kW @ 50 Hz)',
        tankSize: '120 Liters (Diesel with Level Sensor)',
        sockets: 'Output: 3 x 16A Sockets with MCB Protection',
        weight: '1050 kg',
        dimensions: 'Travel: 2.4 x 1.4 x 2.5 m\nOperation: 2.8 x 2.6 x 12.0 m'
      }
    ],
    features: [
      'Ideal for large-scale mining, port terminals, and round-the-clock infrastructure works',
      'Heavy-duty hot-dip galvanized 12-meter telescopic mast with automatic locking',
      'Longer run time allows up to 80+ hours of continuous operation between refueling',
      'Water-cooled Escort Kubota engine enables peak continuous duty in extreme ambient temperatures (-10°C to +50°C)',
      'Certified wind resistance tested up to 100 km/h with 4 heavy-duty outrigger leveling jacks',
      'Single axle trailer with leaf spring suspension and NATO eye / 2" ball coupler for highway towing'
    ],
    highlights: [
      {
        title: 'Lights',
        items: [
          'High-efficacy modular LED floodlights delivering 1,60,000 to 2,40,000 lumens',
          'Heavy-duty cast aluminum IP67/IP68 fixtures engineered for high vibration resistance',
          'Individual light head manual 3-angle tilt adjustment for targeted perimeter coverage',
          'Optical polycarbonate lenses ensuring uniform lumen distribution without harsh glare or blind spots'
        ]
      },
      {
        title: 'Mast',
        items: [
          '12.0-meter galvanized steel telescopic mast with multi-stage extension',
          'Smooth self-locking worm winch system reducing operator load to raise and lower the tower',
          'Full 355-degree mast rotation with quick locking mechanism at desired azimuth',
          'All pulleys equipped with sealed deep-groove bearings and zinc plating for maximum working life',
          'Corrosion-proof stainless steel aircraft-grade wire ropes rated for heavy safety margins'
        ]
      },
      {
        title: 'Mobility',
        items: [
          'Single heavy axle fitted with 14" pneumatic off-road tires and leaf-spring suspension',
          'Towing drawbar convertible between NATO standard towing eye and 2-inch ball coupler',
          'Central balanced crane lifting hook for overhead crane handling on site',
          'Reinforced 3-way forklift pockets allowing safe handling from any side',
          'Integrated tie-down anchors for secure transport on flatbed trucks and rail wagons'
        ]
      },
      {
        title: 'Stability',
        items: [
          '4 independent heavy-duty outrigger stabilizer jacks plus 1 jockey wheel jack on drawbar',
          'Certified structural stability in extreme winds up to 100 km/h with fully extended 12m mast',
          'Sidewind ergonomic leveling jacks with integrated bubble spirit levels for rapid setup on rough terrain'
        ]
      },
      {
        title: 'Power In/Out & Electrical',
        items: [
          'IP65 rated weatherproof auxiliary output sockets providing auxiliary 220V site power',
          'Dual changeover switch enables operating the lights directly from site utility grid supply',
          'Individual circuit breakers (MCBs) protect all lighting circuits and auxiliary outlets',
          'Comprehensive digital control panel with hour counter, fuel gauge, and safety auto-shutdown'
        ]
      }
    ],
    variants: ['ace-lt-9000', 'ace-lt-6000', 'ace-lt-4000', 'ace-2-slt-6000']
  },

  'ace-lt-9000': {
    id: 'ace-lt-9000',
    title: 'ACE LT 9000',
    category: 'diesel',
    categoryName: 'Diesel Powered',
    tagline: 'High-Lumen Diesel Mobile Lighting Tower',
    description: 'The ACE LT 9000 is engineered for severe site conditions where uncompromising brightness and fuel efficiency are paramount. Powered by a Lombardini (Kohler) 8 HP diesel engine, this mobile light tower illuminates up to 10,000 square meters. Its sturdy canopy and compact footprint deliver rapid maneuverability across highways, rail yards, and extraction facilities.',
    image: '/images/products/Diesel oprated/ACLT 9000.png',
    gallery: [
      '/images/products/Diesel oprated/ACLT 9000.png',
      '/images/products/Diesel oprated/ACLT 12000.png',
      '/images/products/Diesel oprated/ACLT 6000.png'
    ],
    featureImage: '/images/industries/roads.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '30 ft (9 m)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '4 x 350W / 450W LED', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '45+ hours', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '10000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: 'Lombardini (Kohler) 8 HP Air-Cooled Diesel',
        generator: 'Linz Electric Synchronous (4.5 kW @ 50 Hz)',
        tankSize: '40 Liters (Diesel)',
        sockets: 'Output: 2 x 16A IP65 Weatherproof',
        weight: '580 kg',
        dimensions: 'Travel: 2.1 x 1.3 x 2.3 m\nOperation: 2.4 x 2.2 x 9.0 m'
      }
    ],
    features: [
      'Genuine Lombardini Kohler Italian diesel engine with low fuel consumption (900 ml/hr)',
      'Broad 10,000 sq. meter illuminated coverage for extensive construction sectors',
      'Rapid deployment mast raised with heavy-duty mechanical winch in less than 2 minutes',
      'Sound-attenuated weatherproof canopy protecting all interior components from rain and dust',
      '4 outrigger stabilizer jacks for wind stability up to 90 km/h'
    ],
    highlights: [
      {
        title: 'Lights',
        items: [
          '4 high-efficiency LED modules producing up to 1,60,000 total lumens',
          'Instant on/off with zero restrike delay or warm-up time required',
          'Heavy-duty IP66 weatherproof housing with corrosion-resistant powder coating'
        ]
      },
      {
        title: 'Mast',
        items: [
          '9-meter telescopic mast fabricated with high-yield structural steel',
          'Hot-dip galvanized sections for lifelong corrosion resistance',
          'Smooth manual winch with internal brake mechanism and safety ratchet'
        ]
      },
      {
        title: 'Mobility & Towing',
        items: [
          'Road-ready chassis with heavy-duty suspension and all-terrain pneumatic tires',
          'Forklift pockets on two sides and integrated crane lifting eye'
        ]
      },
      {
        title: 'Stability',
        items: [
          '4 extendable outriggers with heavy-duty screw jacks for rock-solid stability',
          'Engineered for maximum stability in harsh outdoor winds'
        ]
      },
      {
        title: 'Controls & Electrical',
        items: [
          'Central control panel with key-start switch and digital hour run counter',
          'Circuit breaker protection and auxiliary 220V power take-off'
        ]
      }
    ],
    variants: ['ace-lt-12000', 'ace-lt-6000', 'ace-lt-4000']
  },

  'ace-lt-6000': {
    id: 'ace-lt-6000',
    title: 'ACE LT 6000',
    category: 'diesel',
    categoryName: 'Diesel Powered',
    tagline: 'Versatile Mid-Range Diesel Lighting Tower',
    description: 'The ACE LT 6000 is our most versatile diesel workhorse, combining a reliable 8 HP diesel engine with a 40-liter fuel tank that burns only 900ml per hour. Ideal for construction, quarries, road paving, and public events, it illuminates up to 7,000 square meters with minimal operating costs.',
    image: '/images/products/Diesel oprated/ACLT 6000.png',
    gallery: [
      '/images/products/Diesel oprated/ACLT 6000.png',
      '/images/products/Diesel oprated/ACLT 4000.png',
      '/images/products/Diesel oprated/ACLT 9000.png'
    ],
    featureImage: '/images/industries/construction.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '26 ft (8 m)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '4 x 350W LED', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '44+ hours', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '7000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: '8 HP Air-Cooled Diesel Engine (3000 RPM)',
        generator: '3.5 kVA Synchronous Alternator',
        tankSize: '40 Liters (Diesel)',
        sockets: 'Output: 16A 3-pin 220V',
        weight: '650 kg',
        dimensions: 'Travel: 2.0 x 1.2 x 2.2 m\nOperation: 2.2 x 2.0 x 8.0 m'
      }
    ],
    features: [
      'Economical fuel consumption: only 900 ml per hour',
      '40-liter diesel capacity providing uninterrupted two-night operation',
      '4 high-intensity LED floodlights covering 7,000 sq. meters',
      'Full 355-degree manual mast rotation for all-around job-site illumination',
      'Compact footprint easily towed by pickup trucks and light utility vehicles'
    ],
    highlights: [
      {
        title: 'Lights',
        items: [
          '4 x 350W LED floodlights generating 1,40,000 lumens',
          'Vibration-damped brackets designed for continuous job-site duty',
          'Independent lamp angle adjustment'
        ]
      },
      {
        title: 'Mast & Winch',
        items: [
          '8.0-meter galvanized steel telescopic mast',
          'Manual brake winch with safety pawl mechanism',
          '355-degree mast rotation with position clamp'
        ]
      },
      {
        title: 'Mobility & Handling',
        items: [
          'Single axle chassis with 13-inch pneumatic tires',
          'Forklift pockets, crane lifting eye, and folding drawbar'
        ]
      },
      {
        title: 'Stability & Outriggers',
        items: [
          '4 manual outriggers with leveling feet for quick leveling on slopes',
          'Wind resistance rated to 80 km/h'
        ]
      },
      {
        title: 'Electrical & Genset',
        items: [
          'Key electric start with emergency recoil start backup',
          'Integrated distribution board with circuit breaker protection'
        ]
      }
    ],
    variants: ['ace-lt-4000', 'ace-lt-9000', 'ace-lt-12000']
  },

  'ace-lt-4000': {
    id: 'ace-lt-4000',
    title: 'ACE LT 4000',
    category: 'diesel',
    categoryName: 'Diesel Powered',
    tagline: 'Compact & Agile Diesel Light Tower',
    description: 'The ACE LT 4000 is built for rapid-response municipal works, urban road repairs, utility trenching, and emergency breakdowns. Featuring an ultra-compact chassis weighing under 400 kg, it consumes only 600ml of diesel per hour and can be placed in tight spots where larger rigs cannot fit.',
    image: '/images/products/Diesel oprated/ACLT 4000.png',
    gallery: [
      '/images/products/Diesel oprated/ACLT 4000.png',
      '/images/products/Diesel oprated/ACLT 6000.png'
    ],
    featureImage: '/images/industries/roads.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '20 ft (6 m)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '2 to 4 x 250W LED', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '30+ hours', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '4000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: '4.5 - 5.0 HP Air-Cooled Diesel (3000 RPM)',
        generator: '2.5 kVA Synchronous Alternator',
        tankSize: '15 - 20 Liters',
        sockets: 'Output: 16A 220V IP55',
        weight: '380 kg',
        dimensions: 'Travel: 1.8 x 1.0 x 2.0 m\nOperation: 2.0 x 1.8 x 6.0 m'
      }
    ],
    features: [
      'Ultra-compact trailer maneuverable by a single operator',
      'Extremely economical 600 ml/hr fuel burn rate',
      'Illuminates up to 4,000 sq. meters with 2 to 4 LED lamps',
      'Telescopic mast with quick-raise mechanism',
      'Ideal for city road maintenance and emergency pipeline repairs'
    ],
    highlights: [
      {
        title: 'Lights',
        items: [
          'High-lumen LED lamps producing instant daylight illumination',
          'Shock-proof mounting brackets'
        ]
      },
      {
        title: 'Mast',
        items: [
          '6-meter telescopic mast with galvanized finish',
          'Lightweight winch for effortless single-person operation'
        ]
      },
      {
        title: 'Mobility',
        items: [
          'Lightweight chassis towable by any small car or van',
          'Heavy-duty jockey wheel with parking brake'
        ]
      },
      {
        title: 'Stability',
        items: [
          '3 stabilizing jacks providing surefooted base on uneven ground',
          'Compact storage footprint'
        ]
      },
      {
        title: 'Electrical',
        items: [
          'Low-oil auto shutdown protection for engine',
          'Weather-protected control switches'
        ]
      }
    ],
    variants: ['ace-lt-6000', 'ace-lt-9000', 'ace-pblt-4000']
  },

  'qube-power-max': {
    id: 'qube-power-max',
    title: 'Qube Power MAX',
    category: 'diesel',
    categoryName: 'Diesel Powered',
    tagline: 'Heavy-Duty Diesel Lighting Tower Manufacturer & Supplier',
    description: 'QUBEpower Max is meticulously designed to thrive in a spectrum of demanding applications. Featuring a robust water-cooled engine, a large diesel tank, and a weight of less than 1000 kilograms, this equipment stands as a testament to durability and reliability. It finds its niche in the fields of mining and oil, as well as large-scale infrastructure projects such as dams, bridges, and extensive highways. Furthermore, it is well-suited for the exacting requirements of military and defense applications. Its power and adaptability position it as an indispensable asset for a broad range of industries and projects.',
    image: '/images/products/Diesel oprated/ACLT 12000.png',
    gallery: [
      '/images/products/Diesel oprated/ACLT 12000.png',
      '/images/products/Diesel oprated/ACLT 9000.png',
      '/images/products/Diesel oprated/ACLT 6000.png'
    ],
    featureImage: '/images/industries/mining.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '26 ft (8 m)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '4 x 350 W LED', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '100 hours', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '7500 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: 'Mitsubishi L2E (1500 rpm) / (1800 rpm) / (3000 rpm)',
        generator: 'NSM / Linz (3.5 kW @ 50 Hz) (4 kW @ 60 Hz)(6 kW @ 50 Hz)',
        tankSize: '100 liters\n(Diesel)',
        sockets: 'Output : 16 A, 3-pin female\nInput : 16 A, 3-pin male',
        weight: '750 kg',
        dimensions: 'Travel: 2 x 1.1 x 2.3 m\nOperation: 2 x 2.2 x 8 m'
      },
      {
        engine: 'Mitsubishi L3E (1500 rpm) / (1800 rpm) / (3000 rpm)',
        generator: 'NSM / Linz (5.5 kW @ 50 Hz) (6.5 kW @ 60 Hz) (10 kW @ 50 Hz)',
        tankSize: '170 liters\n(Diesel)',
        sockets: 'Output : 12 x 16 A sockets\nInput : 1 x 16 A 3-pin',
        weight: '890 kg',
        dimensions: 'Travel: 2 x 1.8 x 2.3 m\nOperation: 2 x 2.4 x 8 m'
      }
    ],
    features: [
      'Ideal for large-sized work',
      'Easy to be towed by small vehicles',
      'Longer run time allows for a longer duration between refueling',
      'Radiator cooling enables usage in extreme temperatures'
    ],
    highlights: [
      {
        title: 'Lights',
        items: [
          'Unique modular LED fixture with special lenses for even light distribution',
          'Rugged fixtures that can withstand the rigors of site conditions',
          'Custom-built for durability in challenging work conditions'
        ]
      },
      {
        title: 'Mast',
        items: [
          'Hot-dip galvanized mast ensures superior protection against rusting and abrasions',
          'Unique worm winch reduces the load on the winch handle to raise and lower the mast',
          'Light arm can be tilted manually to 3 different angles',
          'All pulleys are plated and fitted with sealed bearings to give a long life',
          'All wire ropes are stainless steel',
          'Mast can be rotated 355 degrees from the base'
        ]
      },
      {
        title: 'Mobility',
        items: [
          'Single axle with two 13" pneumatic tires and leaf spring suspension',
          'Easily towed with a NATO eye or a 2" ball hitch coupler',
          'Central mast hook for crane lifting',
          'Three-sided forklift pockets for forklift trucks',
          'Four tie-down slots for secure transport',
          'Folding drawbar for compact transport'
        ]
      },
      {
        title: 'Stability',
        items: [
          'There are 4 stabilizer jacks on outriggers and an additional stabilizer jack on the drawbar',
          'This offers superior stability to the machine in wind speeds up to 100 kph',
          'The sidewind jacks make it easy to level the machine during setup'
        ]
      },
      {
        title: 'Power In/Out',
        items: [
          'Power output, depending on the configuration, is available through 1 or 2 female socket(s) that are IP65-rated',
          'Optionally, a power input socket can be provided to run the equipment',
          'Changeover switch allows for switching of the power supply between the genset and the grid supply',
          'Circuit breakers are provided to protect the power into and from the sockets'
        ]
      }
    ],
    variants: ['ace-lt-12000', 'ace-lt-6000', 'ace-lt-9000']
  },

  'ace-b-01': {
    id: 'ace-b-01',
    title: 'ACE B-01',
    category: 'battery',
    categoryName: 'Battery Powered',
    tagline: 'Suitcase-Portable Rechargeable LED Light System',
    description: 'The ACE B-01 is a compact, ultra-lightweight suitcase-portable LED floodlight system designed for rapid zero-emission deployment. Ideal for railway nighttime inspections, tunnel maintenance, confined space operations, and disaster rescue where combustion engines are strictly prohibited.',
    image: '/images/products/Battery oprated/ACE B01.jpeg',
    gallery: [
      '/images/products/Battery oprated/ACE B01.jpeg',
      '/images/products/Battery oprated/ACE B02.jpeg'
    ],
    featureImage: '/images/industries/events.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '5 ft (1.5 m)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '50W High-Output LED', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '8 - 9 hours', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '1000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: 'Zero-Emission 12V Battery Pack',
        generator: 'Internal Smart Charging Circuit',
        tankSize: '12V Sealed Rechargeable Battery',
        sockets: '12V DC Auxiliary / USB Out',
        weight: '12 kg (Ultra Portable)',
        dimensions: 'Packed: 0.5 x 0.3 x 0.2 m\nDeployed: 0.6 x 0.6 x 1.5 m'
      }
    ],
    features: [
      'Ultra-light 12 kg weight can be hand-carried by a single person anywhere',
      'Zero emissions and 100% silent operation — safe for indoor & tunnel use',
      '8 to 9 hours continuous run time on a single full charge',
      'Waterproof, rugged copolymer suitcase housing (IP65 rated)',
      'Telescopic stainless/aluminum mast with instant latch system'
    ],
    highlights: [
      {
        title: 'Lights',
        items: [
          '50W premium LED chip delivering 5,000 lumens',
          'Diffused optical lens for glare-free working illumination'
        ]
      },
      {
        title: 'Battery & Runtime',
        items: [
          'High cycle-life 12V battery with overcharge and discharge protection',
          'Fast AC mains charging in 4-5 hours'
        ]
      },
      {
        title: 'Mobility',
        items: [
          'Heavy-duty ergonomic carry handle and built-in wheels',
          'Easily stowed in car trunks or emergency response vehicles'
        ]
      },
      {
        title: 'Durability',
        items: [
          'Impact-resistant casing with pressure release valve',
          'Water, mud, and dust resistant'
        ]
      }
    ],
    variants: ['ace-b-02', 'ace-b-04', 'ace-pblt-4000']
  },

  'ace-b-02': {
    id: 'ace-b-02',
    title: 'ACE B-02',
    category: 'battery',
    categoryName: 'Battery Powered',
    tagline: 'Lithium Battery High-Intensity Mobile Floodlight',
    description: 'Equipped with a 50AH lithium-ion battery bank and dual high-efficiency LED heads, the ACE B-02 delivers up to 15,000 lumens with zero fumes, noise, or vibrations. Perfect for track work, aircraft maintenance, telecommunications, and indoor industrial turnaround projects.',
    image: '/images/products/Battery oprated/ACE B02.jpeg',
    gallery: [
      '/images/products/Battery oprated/ACE B02.jpeg',
      '/images/products/Battery oprated/ACE B04.jpeg'
    ],
    featureImage: '/images/industries/construction.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '7 ft (2.2 m)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '2 x 50W LED (100W)', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '8 hours', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '2000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: '12V 50AH Advanced Lithium Battery',
        generator: 'Built-in 220V Fast Charger',
        tankSize: '50AH Lithium Power Cell',
        sockets: '12V DC Out & USB Port',
        weight: '25 kg',
        dimensions: 'Travel: 0.6 x 0.4 x 0.3 m\nOperation: 0.8 x 0.8 x 2.2 m'
      }
    ],
    features: [
      '50AH long-life Lithium battery bank with 2000+ charge cycles',
      'Dual 50W LED floodlights delivering 15,000 lumens',
      'Zero fuel, zero exhaust, and whisper-silent operation',
      'Waterproof IP66 enclosure with all-terrain transport wheels'
    ],
    highlights: [
      {
        title: 'Lights & Optics',
        items: [
          'Dual LED heads with independent pivot and 180-degree tilt',
          'High CRI light rendering for precise nighttime engineering work'
        ]
      },
      {
        title: 'Lithium Power Core',
        items: [
          'Integrated BMS (Battery Management System) with thermal cutoff',
          'Digital LED display for accurate battery percentage and runtime'
        ]
      },
      {
        title: 'Chassis & Portability',
        items: [
          'Retractable luggage-style trolley handle and heavy-duty wheels',
          'Quick-release tripod outriggers for wind stability'
        ]
      }
    ],
    variants: ['ace-b-01', 'ace-b-04', 'ace-pblt-4000']
  },

  'ace-b-04': {
    id: 'ace-b-04',
    title: 'ACE B-04',
    category: 'battery',
    categoryName: 'Battery Powered',
    tagline: 'Quad-LED 70AH Lithium Floodlight Trolley',
    description: 'The ACE B-04 is our most powerful pure battery lighting system, featuring 4 high-output LED lamps and an industrial 70AH lithium battery. Offering up to 25,000 lumens, it replaces noisy small petrol generators with clean, silent, reliable green power.',
    image: '/images/products/Battery oprated/ACE B04.jpeg',
    gallery: [
      '/images/products/Battery oprated/ACE B04.jpeg',
      '/images/products/Battery oprated/ACE B02.jpeg'
    ],
    featureImage: '/images/industries/events.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '8 ft (2.5 m)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '4 x 50W LED (200W)', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '8 hours', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '3500 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: '12V 70AH Lithium-Iron Phosphate (LiFePO4)',
        generator: 'Automatic Multi-Stage Fast Charger',
        tankSize: '70AH Lithium Battery',
        sockets: '12V DC Heavy-Duty Sockets',
        weight: '30 kg',
        dimensions: 'Travel: 0.7 x 0.5 x 0.4 m\nOperation: 1.0 x 1.0 x 2.5 m'
      }
    ],
    features: [
      'Four 50W LED heads produce 25,000 Lumens across 3,500 sq. meters',
      '70AH Lithium battery with rapid recharge capability',
      '100% eco-friendly and zero carbon footprint',
      'Reinforced mobile trolley with high-impact protective casing'
    ],
    highlights: [
      {
        title: 'Lights',
        items: [
          '4 directional floodlights with 360-degree directional coverage',
          'Instant full brightness without warming delays'
        ]
      },
      {
        title: 'Battery Core',
        items: [
          'High safety LiFePO4 cells with smart monitoring',
          '8 hours continuous duration at 100% brightness'
        ]
      }
    ],
    variants: ['ace-b-02', 'ace-pblt-4000', 'ace-0-5-slt-4000']
  },

  'ace-2-slt-6000': {
    id: 'ace-2-slt-6000',
    title: 'ACE 2 SLT 6000',
    category: 'solar',
    categoryName: 'Solar Powered',
    tagline: 'Heavy-Duty Zero-Emission Solar Lighting Tower',
    description: 'The ACE 2 SLT 6000 is our flagship renewable lighting tower, packing 2,340 Watts of sliding monocrystalline solar PV panels and a 48V battery bank. Delivering 1,20,000 lumens across 5,000 square meters, it provides continuous 365-day solar lighting with zero fuel costs, zero carbon emissions, and virtually zero maintenance.',
    image: '/images/products/Solar Oprated/Solar powered.png',
    gallery: [
      '/images/products/Solar Oprated/Solar powered.png'
    ],
    featureImage: '/images/industries/mining.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '23 ft (7 m)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '4 x 30,000 Lumens LED', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '14+ hrs / night', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '5000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: '2340W Monocrystalline Solar Array (585W x 4)',
        generator: '5.0 kVA Intelligent Solar Inverter System',
        tankSize: '12V 200AH x 2 / 48V Deep Cycle Bank',
        sockets: '220V Pure Sine Wave Auxiliary Out',
        weight: '850 - 900 kg',
        dimensions: 'Travel: 2.4 x 1.8 x 2.4 m\nOperation: 3.5 x 2.4 x 7.0 m'
      }
    ],
    features: [
      'Massive 2,340W high-efficiency sliding solar array',
      '1,20,000 Lumens output with 4 precision optics LED heads',
      'Zero fuel expense and zero carbon emissions — 100% sustainable',
      'Tiltable 7-meter mast with 359-degree rotation',
      'Smart MPPT solar charge controller with auto dusk-to-dawn sensor'
    ],
    highlights: [
      {
        title: 'Solar PV Array',
        items: [
          '4 x 585W high-efficiency tier-1 monocrystalline panels',
          'Heavy-duty sliding rail system for quick deployment and transport',
          'Optimal tilt angle for maximum solar irradiation capture'
        ]
      },
      {
        title: 'Battery & Solar Controller',
        items: [
          'Industrial deep-cycle battery bank with 3-day autonomy backup',
          'Advanced MPPT solar tracking achieving 98% efficiency',
          'Automatic dusk-to-dawn lighting timer'
        ]
      },
      {
        title: 'Mast & Stability',
        items: [
          '7.0-meter galvanized telescopic mast with tiltable capability',
          '4 stabilizer outriggers rated for 100 km/h wind resistance'
        ]
      }
    ],
    variants: ['ace-1-3-slt-6000', 'ace-0-5-slt-4000', 'ace-lt-6000']
  },

  'ace-1-3-slt-6000': {
    id: 'ace-1-3-slt-6000',
    title: 'ACE 1.3 SLT 6000',
    category: 'solar',
    categoryName: 'Solar Powered',
    tagline: '1320W Eco-Friendly Solar Lighting Tower',
    description: 'An extended solar mobile lighting tower equipped with a 4-panel 1,320W sliding solar array, 2.5 kVA inverter, and 40,000 lumens output. Built for highway expansions, solar parks, and remote sites where refueling is costly or impractical.',
    image: '/images/products/Solar Oprated/Solar powered.png',
    gallery: [
      '/images/products/Solar Oprated/Solar powered.png'
    ],
    featureImage: '/images/industries/roads.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '20 ft (6 m)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '4 x 10,000 Lumens LED', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '12+ hrs / night', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '3200 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: '1320W Solar PV (330W x 4 Sliding Array)',
        generator: '2.5 kVA Solar Inverter System',
        tankSize: '12V 150AH x 4 Bank',
        sockets: '220V AC Auxiliary Output',
        weight: '400 kg',
        dimensions: 'Travel: 2.2 x 1.5 x 2.2 m\nOperation: 2.8 x 2.2 x 6.0 m'
      }
    ],
    features: [
      '1,320W solar array with slide-out wings for fast setup',
      '40,000 Lumens crisp white LED illumination',
      'Automated daylight sensing switch for hands-free operation',
      'Towable single axle trailer with protective canopy'
    ],
    highlights: [
      {
        title: 'Solar Panels & Inverter',
        items: [
          '4 x 330W crystalline solar modules on heavy guide rails',
          '2.5 kVA inverter with pure sine wave output'
        ]
      },
      {
        title: 'Mast',
        items: [
          '6-meter manual telescopic mast with 359-degree rotation'
        ]
      }
    ],
    variants: ['ace-2-slt-6000', 'ace-0-5-slt-4000']
  },

  'ace-0-5-slt-4000': {
    id: 'ace-0-5-slt-4000',
    title: 'ACE 0.5 SLT 4000',
    category: 'solar',
    categoryName: 'Solar Powered',
    tagline: 'Compact 660W Solar Mobile Light Tower',
    description: 'Compact eco-friendly mobile solar light tower featuring twin 330W sliding panels (660W total), 1.2 kVA inverter, and 28,800 lumens output. Designed for fast mobile roadwork and zero-noise night utilities.',
    image: '/images/products/Solar Oprated/Solar powered.png',
    gallery: [
      '/images/products/Solar Oprated/Solar powered.png'
    ],
    featureImage: '/images/industries/construction.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '16 ft (5 m)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '4 x 7,200 Lumens LED', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '10 - 12 hours', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '2500 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: '660W Solar PV (330W x 2 Sliding Panels)',
        generator: '1.2 kVA Inverter / 24V Controller',
        tankSize: '12V 150AH x 2 Battery Bank',
        sockets: '220V AC Outlet',
        weight: '350 kg',
        dimensions: 'Travel: 1.9 x 1.2 x 2.1 m\nOperation: 2.2 x 2.0 x 5.0 m'
      }
    ],
    features: [
      '660W solar power with 24V MPPT solar controller',
      '28,800 Lumens energy-efficient LED light package',
      'Zero fuel cost, zero engine maintenance, 100% clean green power',
      'Lightweight trailer towable by small vehicles'
    ],
    highlights: [
      {
        title: 'Solar & Battery',
        items: [
          'High-durability solar modules rated for 25-year service life',
          'Deep-cycle battery pack with sealed enclosure'
        ]
      }
    ],
    variants: ['ace-1-3-slt-6000', 'ace-2-slt-6000', 'ace-b-04']
  },

  'without-genset': {
    id: 'without-genset',
    title: 'Mobile Light Tower (Without Genset)',
    category: 'without-genset',
    categoryName: 'Without Genset',
    tagline: 'Grid-Connected 220V Ultra-High Lumen Tower',
    description: 'Engineered for industrial plants, shipyards, railway terminals, sports arenas, and infrastructure job sites with existing AC power supply. Eliminates engine maintenance and fuel logistics while delivering an astounding 2,40,000 Lumens from a massive 12-meter mast.',
    image: '/images/products/Mobile Tower Without Genset/Mobile tower without genset.jpeg',
    gallery: [
      '/images/products/Mobile Tower Without Genset/Mobile tower without genset.jpeg'
    ],
    featureImage: '/images/industries/construction.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '39 ft (12 m)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '6 x 400W LED (2400W)', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '24/7 Unlimited', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '7000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: 'Direct 220V Single-Phase Grid Supply',
        generator: 'External Site Distribution / Main Board',
        tankSize: 'None (Zero Fuel Required)',
        sockets: 'Input: 32A Industrial IP67 Plug',
        weight: '650 kg',
        dimensions: 'Travel: 2.2 x 1.4 x 2.4 m\nOperation: 2.5 x 2.4 x 12.0 m'
      }
    ],
    features: [
      'Plugs directly into site 220V grid supply — runs 24/7 with zero fuel logistics',
      'Massive 2,40,000 Lumens from six 400W industrial floodlights',
      '12-meter hot-dip galvanized mast for wide-area coverage',
      'Zero diesel emissions, zero noise, and lowest cost of ownership',
      'Towing trailer with outriggers for wind stability up to 100 km/h'
    ],
    highlights: [
      {
        title: 'Lights',
        items: [
          '6 x 400W high-output LED floodlights (2,400W total array)',
          'Modular fixtures with individual aiming and rotation'
        ]
      },
      {
        title: 'Mast',
        items: [
          '12.0-meter galvanized heavy-duty telescopic mast',
          'Double mechanical winch system with safety locking'
        ]
      }
    ],
    variants: ['ace-lt-12000', 'ace-lt-9000']
  },

  'ace-plt-4000': {
    id: 'ace-plt-4000',
    title: 'ACE PLT 4000 (Petrol Genset)',
    category: 'petrol',
    categoryName: 'Petrol Powered',
    tagline: 'Ultra-Portable Petrol Light Tower with Honda EP 1000',
    description: 'The ACE PLT 4000 features a genuine Honda EP 1000 4-stroke petrol generator paired with 6 high-intensity LED floodlights. Weighing just 60 kg, it offers unbeatable portability for road maintenance crews, municipal utility repairs, and temporary outdoor markets.',
    image: '/images/products/Petrol oprated/petrol oprated.jpeg',
    gallery: [
      '/images/products/Petrol oprated/petrol oprated.jpeg'
    ],
    featureImage: '/images/industries/roads.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '13 ft (4 m)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '6 x 50W LED (300W)', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '5 - 6 hours / tank', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '3000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: 'Honda EP 1000 4-Stroke OHV Petrol Engine',
        generator: 'Honda High-Reliability Alternator',
        tankSize: '3.6 Liters Petrol Tank',
        sockets: '220V Domestic 3-Pin Socket',
        weight: '60 kg (Ultra Lightweight)',
        dimensions: 'Travel: 1.2 x 0.8 x 1.6 m\nOperation: 1.5 x 1.5 x 4.0 m'
      }
    ],
    features: [
      'Genuine Honda EP 1000 petrol genset renowned for easy starting and reliability',
      'Ultra-light 60 kg weight easily loaded onto small utility vehicles or pickups',
      '50,000 Lumens output from six 50W LED heads',
      '4-meter telescopic mast with quick-lock clamp rings'
    ],
    highlights: [
      {
        title: 'Engine',
        items: [
          'Honda 4-stroke engine with low oil alert and quiet muffler',
          'Fuel-efficient operation with 3.6L tank providing 5-6 hours runtime'
        ]
      }
    ],
    variants: ['ace-pblt-4000', 'ace-lt-4000', 'ace-b-04']
  },

  'ace-pblt-4000': {
    id: 'ace-pblt-4000',
    title: 'ACE PBLT 4000 (Hybrid Power)',
    category: 'hybrid',
    categoryName: 'Battery-Petrol Hybrid',
    tagline: 'Dual Fuel Intelligent Hybrid Lighting Tower',
    description: 'The ACE PBLT 4000 combines the best of both worlds: silent lithium battery power for nighttime residential and noise-restricted zones, coupled with an automatic petrol generator that recharges the battery bank when needed. Provides up to 16+ hours of uninterrupted light.',
    image: '/images/products/baterry petrol oprated/battery petrol oprated.jpeg',
    gallery: [
      '/images/products/baterry petrol oprated/battery petrol oprated.jpeg'
    ],
    featureImage: '/images/industries/events.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '20 ft (6 m)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '4 x 100W / 150W LED', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '16+ hours', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '5000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: 'Honda / Kohler Petrol Engine + Smart Lithium Bank',
        generator: 'Dual-Mode Hybrid Inverter / Charger',
        tankSize: 'Petrol + 100AH Lithium Pack',
        sockets: '16A 220V Out & USB Out',
        weight: '280 kg',
        dimensions: 'Travel: 1.8 x 1.1 x 2.1 m\nOperation: 2.0 x 2.0 x 6.0 m'
      }
    ],
    features: [
      'Dual-mode hybrid powertrain: switch seamlessly between silent battery and engine',
      'Over 16 hours total continuous runtime for multi-shift work',
      'Silent battery night mode complies with city noise curfews',
      'Compact mobile trailer with 6-meter telescopic mast'
    ],
    highlights: [
      {
        title: 'Hybrid Management',
        items: [
          'Intelligent controller automatically cycles engine to recharge battery',
          'Enables zero noise operation during sensitive night hours'
        ]
      }
    ],
    variants: ['ace-plt-4000', 'ace-b-04', 'ace-lt-4000']
  },

  'ace-1-2-it-4500': {
    id: 'ace-1-2-it-4500',
    title: 'ACE 1.2 IT 4500 (Inflatable Balloon Tower)',
    category: 'inflatable',
    categoryName: 'Inflatable Tower',
    tagline: '360-Degree Glare-Free Balloon Light Tower',
    description: 'The ACE 1.2 IT 4500 is an aerodynamic cylindrical inflatable light tower providing uniform 360-degree glare-free illumination. Designed specifically for highway paving, emergency disaster response, accident scenes, and nighttime VIP events where harsh shadows and direct blinding glare must be completely avoided.',
    image: '/images/products/Inflatable tower/Inflatable tower.png',
    gallery: [
      '/images/products/Inflatable tower/Inflatable tower.png'
    ],
    featureImage: '/images/industries/events.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '15 ft (4.5 m)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '1000W / 1200W Balloon', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: 'Continuous / 8L Tank', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '10000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: 'Integrated 4-Stroke Air-Cooled Generator',
        generator: '1200VA Single Phase 230V ±5V',
        tankSize: '8 Liters Fuel Tank',
        sockets: '230V Auxiliary Outlet',
        weight: '50 kg',
        dimensions: 'Packed: 0.8 x 0.6 x 0.8 m\nInflated: 0.8 x 0.8 x 4.5 m'
      }
    ],
    features: [
      '360-degree shadow-free, non-glare diffused illumination covering 10,000 sq. meters',
      'Inflates to full 4.5-meter height in less than 60 seconds with internal fan',
      'Ultra-light 50 kg total weight in a compact wheeled carry case',
      'Ideal for night highway paving, rescue operations, and crowd security'
    ],
    highlights: [
      {
        title: 'Balloon & Light Optics',
        items: [
          'High-strength translucent ripstop nylon balloon envelope',
          '360-degree diffusion prevents driver blinding and harsh shadows'
        ]
      },
      {
        title: 'Rapid Deployment',
        items: [
          'Integrated air blower raises the column in under 60 seconds',
          'Guy lines and ground pegs secure tower in winds up to 60 km/h'
        ]
      }
    ],
    variants: ['ace-b-04', 'ace-plt-4000', 'ace-lt-4000']
  }
};
