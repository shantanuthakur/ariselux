// Products Data for Ariselux Light Towers
// Extracted from official factory technical specification brochures (company product information)
// Structured matching modern lightingtowers.in engineering layouts

export const productsData = {
  // ── 1. DIESEL POWERED ──────────────────────────────────────────────
  'ace-lt-12000': {
    id: 'ace-lt-12000',
    title: 'ACE LT 12000',
    category: 'diesel',
    categoryName: 'Diesel Powered',
    tagline: 'High-Voltage 240,000 Lumens Heavy Diesel Mobile Lighting Tower',
    description: 'Ariselux Equipment Company proudly presents its advanced LED Flood Light solution - engineered for maximum brightness, energy efficiency, and durability. Recently, we completed the successful installation of 4 high-voltage LED Flood Lights, delivering a combined luminous output of 240,000 lumens (40,000 to 60,000 lumens per light). With a total power range of 300W to 500W, powered by a genuine Japanese Escort Kubota 14.5 HP water-cooled diesel engine operating at 1500 RPM and an automated 12.0-meter telescopic mast, these towers are designed to perform in the most demanding mining, infrastructure, and heavy industrial environments.',
    image: '/images/products/Diesel oprated/aclt-12000-view1.jpg',
    gallery: [
      '/images/products/Diesel oprated/aclt-12000-view1.jpg',
      '/images/products/Diesel oprated/aclt-12000-view2.jpg',
      '/images/products/Diesel oprated/aclt-12000-view3.jpg'
    ],
    featureImage: '/images/industries/mining.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '39 ft (12.0 MTR)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '4 x 300W-500W LED (2,40,000 Lumens)', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '80+ Hours (Kubota Diesel)', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '8000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: 'Escort Kubota 14.5 HP (1500 R.P.M) Water-Cooled Diesel',
        generator: '220 Volts Connection Board Output',
        tankSize: '100 Liters (Diesel)',
        sockets: 'Industrial Weatherproof Sockets with MCB Protection',
        weight: '600 - 700 KG',
        dimensions: 'Travel: 2.3 x 1.4 x 2.4 m\nOperation: 2.6 x 2.4 x 12.0 m'
      }
    ],
    features: [
      'Combined luminous output of 240,000 lumens (40,000 - 60,000 lumens per light)',
      'High-voltage LED flood lights with power range 300W to 500W',
      'Illumination coverage up to 8,000 square meters',
      'Japanese Escort Kubota 14.5 H.P 1500 R.P.M water-cooled diesel engine',
      '12.0-meter heavy-duty vertical telescopic mast (ground level to lights)',
      'Single-axle trailer chassis with 4 heavy-duty outrigger leveling jacks'
    ],
    highlights: [
      {
        title: 'Lights & Optics',
        items: [
          'High-voltage modular LED floodlights delivering 2,40,000 total lumens',
          'Heavy-duty cast aluminum IP67/IP68 luminaire housings with vibration dampers',
          'Independent 3-axis manual angle orientation for targeted perimeter coverage',
          'Optical polycarbonate lenses ensuring uniform luminous distribution'
        ]
      },
      {
        title: 'Mast & Winch',
        items: [
          '12.0-meter heavy-duty galvanized steel telescopic mast',
          'Smooth self-locking worm winch with stainless steel aircraft-grade cable',
          '355-degree mast rotation with positive locking pin at any orientation',
          'Sealed deep-groove bearing pulleys with zinc plating for long service life'
        ]
      },
      {
        title: 'Mobility & Towing',
        items: [
          'Heavy-duty trailer chassis with pneumatic all-terrain 14" tires',
          'Universal tow hitch drawbar convertible for NATO eye or ball coupler',
          'Integrated central crane lifting eye and 3-way forklift pockets',
          'Certified highway speed towing up to 80 km/h with leaf spring suspension'
        ]
      },
      {
        title: 'Stability & Safety',
        items: [
          '4 independent heavy-duty wind-down outrigger stabilizer jacks with footpads',
          'Tested and certified for stability in high winds up to 100 km/h',
          'Integrated spirit bubble levels for rapid field leveling on unpaved terrain'
        ]
      },
      {
        title: 'Power & Controls',
        items: [
          'Standard 220 Volts output connection board for auxiliary site tools',
          'Dual changeover switch enables operating lights directly from grid utility',
          'Safety shutdown sensors for low engine oil pressure and high coolant temperature'
        ]
      }
    ],
    variants: ['ace-lt-9000', 'ace-lt-6000', 'without-genset']
  },

  'ace-lt-9000': {
    id: 'ace-lt-9000',
    title: 'ACE LT 9000',
    category: 'diesel',
    categoryName: 'Diesel Powered',
    tagline: 'High-Efficiency Air-Cooled Diesel Mobile Lighting Tower',
    description: 'At Ariselux, we specialize in providing top-tier LED Flood Light solutions designed to deliver powerful, efficient, and long-lasting illumination. Our recent installation showcases the strength of our Technology - 4 high-voltage LED flood lights, with Power Ratings Ranging from 200W to 500W, engineered to cover an expansive Area of up to 10,000 square mt. Powered by a durable Lombardini (Kohler) 8 HP Air-Cooled diesel engine operating at 3000 R.P.M with an ultra-economical 900 ml/hr fuel consumption and 40-liter tank.',
    image: '/images/products/Diesel oprated/aclt-9000-view1.jpg',
    gallery: [
      '/images/products/Diesel oprated/aclt-9000-view1.jpg',
      '/images/products/Diesel oprated/aclt-9000-view2.jpg',
      '/images/products/Diesel oprated/aclt-9000-view3.jpg'
    ],
    featureImage: '/images/industries/roads.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '30 ft (9.0 MTR)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '4 x 200W-500W LED', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '44+ Hours (40L / 900ml/hr)', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '4500 - 10000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: 'Lombardini (Kohler) 8 H.P Air-Cooled Diesel (3000 R.P.M)',
        generator: '220 Volts Connection Board Output',
        tankSize: '40 LTR CAPACITY (Consumption: 900 ml/hr)',
        sockets: '12 Volts 35 AH Starting Battery | Sockets with MCB',
        weight: '550 - 600 KG',
        dimensions: 'Travel: 2.2 x 1.3 x 2.3 m\nOperation: 2.5 x 2.2 x 9.0 m'
      }
    ],
    features: [
      'Expansive illumination area coverage up to 10,000 square meters',
      '4 high-voltage LED flood lights with power ratings ranging from 200W to 500W',
      'Genuine Lombardini (Kohler) 8 HP air-cooled diesel engine running at 3000 R.P.M',
      '40-liter diesel tank capacity with fuel consumption of only 900 ml per hour',
      '12 Volts 35 AH battery with heavy-duty electric starter motor',
      'Standard 220 Volts connection board output for auxiliary job site power'
    ],
    highlights: [
      {
        title: 'Lights',
        items: [
          'High-intensity multi-wattage LED array (200W to 500W per head)',
          'Instant on/off with zero restrike delay or warm-up time required',
          'Heavy cast aluminum housings sealed to IP66 weatherproof rating'
        ]
      },
      {
        title: 'Mast',
        items: [
          '9.0-meter galvanized steel telescopic mast with cable guides',
          'Dual manual safety lock pins preventing unexpected mast lowering',
          'Manual worm gear winch with automatic friction braking mechanism'
        ]
      },
      {
        title: 'Mobility & Dimensions',
        items: [
          'Compact transport footprint of 550 - 600 kg weight',
          'Road-worthy suspension with pneumatic tires and foldaway tow bar',
          'Central crane lifting point and dual forklift pockets'
        ]
      },
      {
        title: 'Stability',
        items: [
          '4 retractable outrigger stabilizer arms extending wide for solid footing',
          'Stable in wind gusts up to 80 km/h with mast fully deployed'
        ]
      }
    ],
    variants: ['ace-lt-12000', 'ace-lt-6000']
  },

  'ace-lt-6000': {
    id: 'ace-lt-6000',
    title: 'ACE LT 6000',
    category: 'diesel',
    categoryName: 'Diesel Powered',
    tagline: 'Reliable 4-Light Diesel Mobile Lighting Tower',
    description: 'The ACE LT 6000 is engineered for continuous night operations on highways, construction jobs, and municipal maintenance. Powered by an air-cooled Kohler / Kubota 8 HP diesel engine running at 3000 RPM with a 40-liter tank (900 ml/hr consumption), it drives 4 LED floodlights (200W-450W) covering up to 7,000 square meters.',
    image: '/images/products/Diesel oprated/aclt-6000-view1.jpg',
    gallery: [
      '/images/products/Diesel oprated/aclt-6000-view1.jpg',
      '/images/products/Diesel oprated/aclt-6000-view2.jpg',
      '/images/products/Diesel oprated/aclt-6000-view3.jpg'
    ],
    featureImage: '/images/industries/construction.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '23 ft (7.0 MTR)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '4 x 200W-450W LED', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '44+ Hours (40L / 900ml/hr)', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: 'Up to 7000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: 'Kohler / Kubota (Air Cooled) 3000 R.P.M / 8 H.P',
        generator: '220 Volts Connection Board Output',
        tankSize: '40 LTR CAPACITY (900 ml/hr consumption)',
        sockets: '12 Volts 35 AH Starting Battery | Weatherproof Sockets',
        weight: '650 - 700 KG',
        dimensions: 'Travel: 2.1 x 1.3 x 2.2 m\nOperation: 2.4 x 2.0 x 7.0 m'
      }
    ],
    features: [
      'Area illumination coverage up to 7,000 square meters',
      '4 high-output LED floodlights (200W - 450W)',
      'Kohler / Kubota 8 HP air-cooled diesel engine at 3000 RPM',
      '40-liter fuel tank delivering over 44 continuous operating hours',
      'Output connection board providing auxiliary 220 Volts',
      'Heavy-duty 650-700 kg chassis with 4 leveling outriggers'
    ],
    highlights: [
      {
        title: 'Lights',
        items: [
          '4 x 200W - 450W LED floodlights with IP66 weatherproof rating',
          'Vibration-resistant bracketry designed for towed mobile trailers',
          'Individual lamp orientation for rectangular or circular light spread'
        ]
      },
      {
        title: 'Mast',
        items: [
          '7.0-meter galvanized steel telescopic mast',
          'Quick-raising manual winch system with automatic safety brake',
          '360-degree mast rotation with locking pin'
        ]
      },
      {
        title: 'Engine & Fuel',
        items: [
          'Air-cooled 8 HP Kohler / Kubota industrial diesel engine',
          'Large 40-liter tank requiring refueling only once every 44+ hours',
          'Fuel water separator and heavy-duty air filter'
        ]
      }
    ],
    variants: ['ace-lt-12000', 'ace-lt-9000']
  },

  // ── 2. MOBILE TOWER WITHOUT GENSET ─────────────────────────────────
  'without-genset': {
    id: 'without-genset',
    title: 'Mobile Light Tower without Genset',
    category: 'without-genset',
    categoryName: 'Mobile Tower Without Genset',
    tagline: 'High-Performance 2,40,000 Lumens Grid-Powered Mobile Tower',
    description: 'The Mobile light tower without Genset is a high-performance mobile light tower designed for powerful illumination without the need for an onboard generator. Ideal for construction sites, outdoor events, emergency response, and mining operations, this unit delivers robust lighting while remaining compact, zero-emission, and easy to transport.',
    image: '/images/products/Mobile Tower Without Genset/withoutgenset-angle1.jpg',
    gallery: [
      '/images/products/Mobile Tower Without Genset/withoutgenset-angle1.jpg',
      '/images/products/Mobile Tower Without Genset/withoutgenset-angle2.jpg',
      '/images/products/Mobile Tower Without Genset/withoutgenset-angle3.jpg'
    ],
    featureImage: '/images/industries/construction.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '39 ft (12.0 MTR)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '6 x 400W LED = 2400W', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: 'Continuous Grid / External Power', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '7000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: 'External 220V Grid / Onsite Genset Input',
        generator: 'Output Connection Board: 220 Volts',
        tankSize: 'Direct Power Supply (Zero Fuel Required)',
        sockets: 'Power (of Lights): 6 x 400W = 2400W | Brightness: 2,40,000 Lumens',
        weight: '600 - 700 KG (Approx)',
        dimensions: 'Travel: 2.2 x 1.3 x 2.4 m\nOperation: 2.6 x 2.4 x 12.0 m'
      }
    ],
    features: [
      '6 x 400W high-intensity LED floodlights delivering a massive 2,400W total power',
      'Combined brightness of 2,40,000 Lumens (40,000 lumens x 6 fixtures)',
      'Illumination area coverage up to 7,000 square meters',
      'Heavy-duty 12.0-meter telescopic mast extension',
      'Direct connection to 220V site grid or external central generator',
      'Applications: Road construction & maintenance, mining & oil fields, emergency & disaster response, outdoor events, airport & military operations'
    ],
    highlights: [
      {
        title: 'Zero-Emission Lighting',
        items: [
          'No onboard engine or fuel maintenance required',
          'Zero fumes, zero engine noise, and zero carbon footprint on site',
          'Plug-and-play operation directly from any 220V industrial power distribution box'
        ]
      },
      {
        title: 'Lights & Hexagonal Array',
        items: [
          'Hexagonal light bracket array holding 6 x 400W LED luminaires',
          'Individual light tilt adjustment for 360-degree or focused directional lighting',
          'IP66 rated waterproof luminaire housings'
        ]
      },
      {
        title: 'Mast & Winch',
        items: [
          'Heavy-duty 12-meter telescopic steel mast with cable guides',
          'Winch-operated elevation with positive safety pin locking mechanism'
        ]
      },
      {
        title: 'Chassis & Stability',
        items: [
          '4-wheel site mobile trailer frame with heavy pneumatic tires',
          'Multiple outrigger leveling jacks providing certified stability'
        ]
      }
    ],
    variants: ['ace-lt-12000', 'ace-5-slt-6000', 'ace-1-2-it-4500']
  },

  // ── 3. PETROL POWERED ──────────────────────────────────────────────
  'ace-plt-4000': {
    id: 'ace-plt-4000',
    title: 'ACE PLT 4000',
    category: 'petrol',
    categoryName: 'Petrol Operated',
    tagline: 'Compact Portable Honda-Powered Petrol Light Tower',
    description: 'The ACE PLT 4000 is a lightweight, ultra-portable mobile lighting tower powered by a genuine Honda EP 1000 generator. Delivering 50,000 lumens from 6 energy-efficient 50W LED floodlights with a 4-meter mast, it is ideal for rapid emergency deployment, municipal maintenance, and nighttime utility repair crews.',
    image: '/images/products/Petrol oprated/petrol-angle1.jpeg',
    gallery: [
      '/images/products/Petrol oprated/petrol-angle1.jpeg',
      '/images/products/Petrol oprated/petrol-angle2.jpg',
      '/images/products/Petrol oprated/petrol-angle3.jpg'
    ],
    featureImage: '/images/industries/roads.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '13 ft (4.0 MTR)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '6 x 50W LED (50,000 Lumens)', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '5 Hours (3.6 Ltr Tank)', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '4000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: 'Honda EP 1000 4-Stroke Petrol Genset',
        generator: 'Integrated Honda Alternator (230V / 50Hz)',
        tankSize: 'PETROL TANK: 3.6 Ltr (Continuous Run: 5 Hours)',
        sockets: 'Light Power: 50W x 6 Nos | Brightness: 50,000 Lumens',
        weight: '60 KG (Ultra Lightweight)',
        dimensions: 'Travel: 0.9 x 0.8 x 1.6 m\nOperation: 1.4 x 1.4 x 4.0 m'
      }
    ],
    features: [
      'Genuine Honda EP 1000 portable petrol genset',
      '6 x 50W LED floodlights delivering 50,000 lumens of brightness',
      '4.0-meter telescopic mast from ground level to light',
      '3.6-liter petrol tank delivering 5 hours of continuous runtime',
      'Total machine weight only 60 kg, easy for two people to lift into a pickup',
      'Compact foldable outrigger base with rapid setup in under 3 minutes'
    ],
    highlights: [
      {
        title: 'Honda Engine Reliability',
        items: [
          'Legendary Honda 4-stroke OHV petrol engine for easy pull-starting',
          'Low emissions and quiet operation suitable for residential zones'
        ]
      },
      {
        title: 'Lights & Mast',
        items: [
          '6 high-efficiency 50W LED fixtures mounted on a circular or linear crossbar',
          '4-meter telescopic mast with quick-action clamp collars'
        ]
      }
    ],
    variants: ['ace-b-04', 'ace-1-2-it-4500']
  },

  'ace-pblt-4000': {
    id: 'ace-pblt-4000',
    title: 'ACE PBLT 4000',
    category: 'hybrid',
    categoryName: 'Battery & Petrol Operated',
    tagline: 'Hybrid Petrol-Battery Dual Power Light Tower',
    description: 'The ACE PBLT 4000 combines petrol engine generation with a built-in lithium battery bank for hybrid silent night running and instant backup power on demanding remote work sites.',
    image: '/images/products/Petrol oprated/petrol-angle1.jpeg',
    gallery: [
      '/images/products/Petrol oprated/petrol-angle1.jpeg',
      '/images/products/Petrol oprated/petrol-angle2.jpg',
      '/images/products/Petrol oprated/petrol-angle3.jpg'
    ],
    featureImage: '/images/industries/events.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '15 ft (4.5 MTR)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '4 x 100W LED (40,000 Lumens)', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '12+ Hours (Hybrid)', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '3500 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: 'Honda Petrol Generator + Integrated Lithium Battery Bank',
        generator: 'Dual Mode 220V Inverter & Alternator',
        tankSize: '5 Ltr Petrol Tank + 12V 100AH Lithium',
        sockets: '230V Auxiliary Outlet with Dual Mode Selector',
        weight: '110 KG',
        dimensions: 'Travel: 1.1 x 0.9 x 1.8 m\nOperation: 1.6 x 1.6 x 4.5 m'
      }
    ],
    features: [
      'Hybrid dual-source operation: engine run or silent battery backup',
      '4 x 100W high-efficiency LED lights',
      '4.5-meter telescopic mast',
      'Seamless switchover between battery and engine mode'
    ],
    highlights: [
      {
        title: 'Hybrid Benefits',
        items: ['Allows silent nighttime operation in residential areas on battery power']
      }
    ],
    variants: ['ace-plt-4000', 'ace-b-04', 'ace-3-slt-6000']
  },

  // ── 4. INFLATABLE TOWER ────────────────────────────────────────────
  'ace-1-2-it-4500': {
    id: 'ace-1-2-it-4500',
    title: 'ACE 1.2 IT 4500',
    category: 'inflatable',
    categoryName: 'Inflatable Tower',
    tagline: '360° Glare-Free 42,000 Lumens Inflatable Balloon Light Tower',
    description: 'The ACE 1.2 IT 4500 is a revolutionary inflatable column light tower providing 360-degree glare-free diffused illumination across 10,000 square meters. Featuring an onboard 230V 1200VA power system with an 8-liter fuel tank and automatic air blower, the cylinder inflates to 4.5 meters in under 60 seconds, eliminating shadows and driver blinding on highway paving, night rail work, and emergency disaster relief operations.',
    image: '/images/products/Inflatable tower/inflatable-angle1.jpg',
    gallery: [
      '/images/products/Inflatable tower/inflatable-angle1.jpg',
      '/images/products/Inflatable tower/inflatable-angle2.jpg',
      '/images/products/Inflatable tower/inflatable-angle3.png'
    ],
    featureImage: '/images/industries/events.jpg',
    quickSpecs: {
      mastHeight: { title: 'Tower height', value: '15 ft (4.5 MTR)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Brightness', value: '42,000 Lumens (360° Glare-Free)', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '10-12 Hours (8 Ltr Tank)', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '10,000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: '230 VOLT 1200VA SINGLE PHASE +-5 VOLT',
        generator: 'Integrated High-Pressure Inflation Blower',
        tankSize: 'TANK CAPACITY: 8 Ltr | LUBE OIL CAPACITY: 400 ml',
        sockets: 'Brightness: 42,000 Lumens | Area Illumination: 10,000 sq/m',
        weight: '50 KG',
        dimensions: 'Tower Height: 4.5 mtr\nTravel: 0.6 x 0.5 x 0.8 m | Operation: 0.6 x 0.5 x 4.5 m'
      }
    ],
    features: [
      'Massive 10,000 square meter area illumination with 360-degree diffusion',
      '42,000 lumens total brightness eliminating dark shadows and driver blinding',
      '230 Volt 1200VA single-phase electrical power base',
      '8-liter fuel tank capacity delivering all-night runtime with 400ml lube oil capacity',
      'Rapid inflation to 4.5 meters in less than 60 seconds via internal blower fan',
      'Compact 50 kg total weight, easily loaded into the boot of an SUV or utility truck'
    ],
    highlights: [
      {
        title: '360° Glare-Free Optical Balloon',
        items: [
          'High-durability translucent ripstop nylon balloon envelope',
          'Diffuses light evenly across 360 degrees without harsh blinding glare',
          'Meets highway and rail safety standards for driver and operator vision'
        ]
      },
      {
        title: 'Rapid Automated Deployment',
        items: [
          'Integrated electric blower fan inflates the column in under 60 seconds',
          'Guy lines and ground anchor pegs secure the tower in wind speeds up to 60 km/h',
          'Deflates and packs into a protective carry container in under 2 minutes'
        ]
      },
      {
        title: 'Power & Fuel Economy',
        items: [
          '8-liter tank provides 10-12 hours of continuous all-night illumination',
          'Low fuel consumption with 400 ml lube oil capacity for reliable continuous duty'
        ]
      }
    ],
    variants: ['ace-plt-4000', 'ace-b-04']
  },

  // ── 5. SOLAR OPERATED ──────────────────────────────────────────────
  'ace-5-slt-6000': {
    id: 'ace-5-slt-6000',
    title: 'ACE 2 SLT 6000',
    category: 'solar',
    categoryName: 'Solar Operated',
    tagline: 'Zero-Emission 1,20,000 Lumens Heavy Solar Mobile Light Tower',
    description: 'The ACE 2 SLT 6000 is our flagship zero-fuel, zero-emission heavy solar mobile lighting tower. Equipped with 4 sliding monocrystalline solar panels (585W x 4 = 2,340W), a 5.0 KVA pure sine wave inverter, 48V solar controller, and heavy-duty 12V 200AH x 2 battery bank, it powers 4 LED floodlights generating 1,20,000 lumens across 5,000 square meters on a tiltable 7.0-meter mast with 359° rotation.',
    image: '/images/products/Solar Oprated/solar-angle1.png',
    gallery: [
      '/images/products/Solar Oprated/solar-angle1.png',
      '/images/products/Solar Oprated/solar-angle2.jpg',
      '/images/products/Solar Oprated/solar-angle3.jpg'
    ],
    featureImage: '/images/industries/mining.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '23 ft (7.0 MTR Tiltable)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '4 x 30,000 = 1,20,000 Lumens', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '100% Solar Autonomous (48V)', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '5000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: 'Solar Panel / Power: (585W x 4 = 2340W) Sliding Type',
        generator: '5.0 KVA Inverter | AC Output: 220 V',
        tankSize: 'Solar Controller: 48 V | Battery: 12V 200AH x 2',
        sockets: 'Brightness: 30000 x 4 = 1,20,000 Lumens | LED Lamps with Canopy',
        weight: '800 - 900 KG',
        dimensions: 'Tower Height: 7.0 mtr from G.L to Light (Tiltable & 359° Rotate)\nTravel: 2.6 x 1.6 x 2.4 m | Operation: 3.2 x 2.8 x 7.0 m'
      }
    ],
    features: [
      '2,340W total solar generation via 4 x 585W sliding monocrystalline panels',
      'Combined brightness of 1,20,000 Lumens (30,000 lumens x 4 LED luminaires)',
      'Illumination area coverage of 5,000 square meters',
      'Heavy-duty 5.0 KVA pure sine wave inverter and 48V solar controller',
      '7.0-meter telescopic mast with tiltable mechanism and full 359° rotation',
      'Zero fuel consumption, zero carbon emissions, and zero engine noise'
    ],
    highlights: [
      {
        title: 'Sliding Solar Photovoltaic Array',
        items: [
          '4 x 585W monocrystalline panels mounted on a sliding pull-out frame',
          'Optimized tilt angle for maximum solar harvest throughout the day',
          'Durable aluminum framing with tempered anti-reflective solar glass'
        ]
      },
      {
        title: 'Energy Storage & Inverter',
        items: [
          '48V intelligent MPPT solar charge controller with smart charging logic',
          'High-capacity deep-cycle battery bank providing all-night continuous runtime',
          '5.0 KVA pure sine wave inverter with 220V auxiliary AC output'
        ]
      },
      {
        title: 'Tiltable Mast & Azimuth Rotation',
        items: [
          '7.0-meter mast with hydraulic/mechanical tilt for compact low-clearance transport',
          'Full 359-degree continuous mast rotation for precise light targeting',
          '4 heavy outriggers providing structural stability in high winds'
        ]
      }
    ],
    variants: ['ace-3-slt-6000', 'ace-3-slt-6000', 'without-genset', 'ace-lt-12000']
  },

  'ace-3-slt-6000': {
    id: 'ace-3-slt-6000',
    title: 'ACE 1.3 SLT 6000',
    category: 'solar',
    categoryName: 'Solar Operated',
    tagline: '1,320W Sliding Panel Commercial Solar Light Tower',
    description: 'The ACE 1.3 SLT 6000 features 4 sliding 330W solar panels (1320W), a 3 KVA inverter, 24V solar controller, and 4 x 12V 150AH battery bank. Delivering 40,000 lumens across 3,200 sq. meters on a 6.0-meter 359° rotating mast.',
    image: '/images/products/Solar Oprated/solar-angle1.png',
    gallery: [
      '/images/products/Solar Oprated/solar-angle1.png',
      '/images/products/Solar Oprated/solar-angle2.jpg',
      '/images/products/Solar Oprated/solar-angle3.jpg'
    ],
    featureImage: '/images/industries/roads.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '20 ft (6.0 MTR)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '4 x 10,000 = 40,000 Lumens', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: 'All-Night Solar Storage (24V)', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '3200 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: 'Solar Panel / Power: (330W x 4 = 1320W) Sliding Type',
        generator: '3 KVA Inverter | AC Output: 220 V',
        tankSize: 'Solar Controller: 24 V | Battery: 12V 150AH x 4',
        sockets: 'Brightness: 10,000 x 4 = 40,000 Lumens | LED with Canopy',
        weight: '350 - 400 KG',
        dimensions: 'Tower Height: 6.0 mtr from G.L to Light (359° Rotate)\nTravel: 2.2 x 1.4 x 2.2 m | Operation: 2.8 x 2.4 x 6.0 m'
      }
    ],
    features: [
      '1,320W solar array with sliding deployment mechanism (330W x 4)',
      '40,000 lumens brightness covering 3,200 square meters',
      '3 KVA inverter and 24V smart solar MPPT controller',
      '6.0-meter telescopic mast with 359° rotation',
      '4 x 12V 150AH deep-cycle battery power bank',
      'Compact mobile chassis weighing 350-400 kg'
    ],
    highlights: [
      {
        title: 'Solar System',
        items: ['High-efficiency solar sliding mechanism for easy transit and rapid setup']
      }
    ],
    variants: ['ace-5-slt-6000', 'ace-3-slt-6000']
  },

  'ace-3-slt-6000': {
    id: 'ace-3-slt-6000',
    title: 'ACE 0.5 SLT 4000',
    category: 'solar',
    categoryName: 'Solar Operated',
    tagline: 'Compact 660W Solar Mobile Light Tower',
    description: 'The ACE 0.5 SLT 4000 is a compact, highly portable solar light tower featuring 2 sliding 330W panels (660W), 1.2 KVA inverter, 24V solar controller, and 2 x 12V 150AH batteries. Illuminates 1,500 sq. meters with 28,800 lumens.',
    image: '/images/products/Solar Oprated/solar-angle1.png',
    gallery: [
      '/images/products/Solar Oprated/solar-angle1.png',
      '/images/products/Solar Oprated/solar-angle2.jpg',
      '/images/products/Solar Oprated/solar-angle3.jpg'
    ],
    featureImage: '/images/industries/construction.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '16 ft (5.0 MTR)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '4 x 7,200 = 28,800 Lumens', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: 'All-Night Solar Battery', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '1500 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: 'Solar Panel / Power: 330W x 2 = 660W (Sliding Type)',
        generator: '1.2 KVA Inverter | AC Output: 220 V',
        tankSize: 'Solar Controller: 24 V | Battery: 12V 150AH x 2',
        sockets: 'Brightness: 7200 x 4 = 28,800 Lumens | LED with Canopy',
        weight: '300 - 400 KG',
        dimensions: 'Tower Height: 5.0 mtr from G.L to Light (359° Rotate)\nTravel: 2.0 x 1.2 x 2.0 m | Operation: 2.4 x 2.0 x 5.0 m'
      }
    ],
    features: [
      '660W solar power via 2 x 330W sliding panels',
      '28,800 lumens brightness covering 1,500 square meters',
      '1.2 KVA inverter with 24V solar controller',
      '5.0-meter telescopic mast with 359° rotation',
      '2 x 12V 150AH battery bank',
      'Lightweight 300-400 kg mobile chassis'
    ],
    highlights: [
      {
        title: 'Eco Mobility',
        items: ['Zero emissions, zero fuel consumption, perfectly silent operation']
      }
    ],
    variants: ['ace-5-slt-6000', 'ace-3-slt-6000', 'ace-b-04']
  },

  // ── 6. BATTERY OPERATED ───────────────────────────────────────────
  'ace-b-04': {
    id: 'ace-b-04',
    title: 'ACE B-04',
    category: 'battery',
    categoryName: 'Battery Operated',
    tagline: 'Portable 4-Light Lithium Industrial Light Tower',
    description: 'Ariselux provides high-quality LED Flood Lights for powerful, energy-efficient lighting. We recently installed 4 high-voltage lights (50W each) delivering 20,000-25,000 lumens of brightness. Ideal for outdoor and industrial use, these durable lights offer wide coverage and long-lasting performance with a 70AH Lithium battery delivering 6-8 hours backup.',
    image: '/images/products/Battery oprated/b04-angle1.jpg',
    gallery: [
      '/images/products/Battery oprated/b04-angle1.jpg',
      '/images/products/Battery oprated/b04-angle2.jpg',
      '/images/products/Battery oprated/b04-angle3.jpg'
    ],
    featureImage: '/images/industries/construction.jpg',
    quickSpecs: {
      mastHeight: { title: 'Tower height', value: '6.5 ft (2.0 MTR)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '4 x 50W LED (25,000 Lumens)', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '6 - 8 Hours (70AH Lithium)', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '2000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: '70AH X1 (Lithium) Battery Capacity | 12 Volts',
        generator: 'Internal Solid-State Battery Inverter & Charger',
        tankSize: '6 - 8 Hrs Battery Backup',
        sockets: '50W X 4 nos Light Power | Brightness: 20,000 - 25,000 Lumens',
        weight: '30 KG Weight (Waterproof Pelican Style)',
        dimensions: 'Tower Height: 2 Meter Telescopic MS Rod Tower\nTravel: 0.5 x 0.4 x 0.7 m | Operation: 0.8 x 0.8 x 2.0 m'
      }
    ],
    features: [
      '4 x 50W high-voltage LED flood lights delivering 20,000 to 25,000 lumens',
      '70AH x 1 high-density Lithium battery capacity at 12 Volts',
      '6 to 8 hours of uninterrupted battery backup',
      '2.0-meter telescopic MS rod tower with quick-twist extension locks',
      'Rugged waterproof case construction with built-in wheels and pull handle',
      'Total weight only 30 kg, easily transported by one person anywhere'
    ],
    highlights: [
      {
        title: 'Lithium Battery System',
        items: [
          'High cycle life 70AH Lithium cell bank with smart Battery Management System (BMS)',
          'Over-charge, over-discharge, and thermal runaway protection',
          'Fast recharge time of 4-5 hours from 220V AC wall outlet or vehicle 12V'
        ]
      },
      {
        title: 'Tactical Waterproof Case',
        items: [
          'Heavy-duty industrial polymer Pelican-style suitcase with sealed rubber O-ring',
          'IP66 waterproof and dustproof protection against extreme weather',
          'Retractable luggage handle and durable polyurethane all-terrain roller wheels'
        ]
      }
    ],
    variants: ['ace-b-02', 'ace-b-01', 'ace-1-2-it-4500']
  },

  'ace-b-02': {
    id: 'ace-b-02',
    title: 'ACE B -02',
    category: 'battery',
    categoryName: 'Battery Operated',
    tagline: 'Dual-Light Portable Lithium Battery Tower',
    description: 'Ariselux offers high-quality LED Flood Lights designed for powerful illumination and energy efficiency. We recently installed 2 high-voltage LED lights, each with a brightness of 10,000-15,000 lumens and power of 50W x 2 units (100W total), backed by a 50AH Lithium battery delivering 6-8 hours backup.',
    image: '/images/products/Battery oprated/b02-angle1.jpg',
    gallery: [
      '/images/products/Battery oprated/b02-angle1.jpg',
      '/images/products/Battery oprated/b02-angle2.jpg',
      '/images/products/Battery oprated/b02-angle3.jpg'
    ],
    featureImage: '/images/industries/roads.jpg',
    quickSpecs: {
      mastHeight: { title: 'Tower height', value: '6 ft (1.8 MTR)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '2 x 50W LED (15,000 Lumens)', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '6 - 8 Hours (50AH Lithium)', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '1500 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: '50AH X1 (Lithium) Battery Capacity | 12 Volts',
        generator: 'Built-in Electronic Battery Controller',
        tankSize: '6 - 8 Hrs Battery Backup',
        sockets: '50W X 2 nos Light Power | Brightness: 10,000 - 15,000 Lumens',
        weight: '25 KG Weight (Waterproof)',
        dimensions: 'Telescopic MS Rod Tower\nTravel: 0.5 x 0.35 x 0.65 m | Operation: 0.7 x 0.7 x 1.8 m'
      }
    ],
    features: [
      '2 x 50W LED floodlights delivering 10,000 to 15,000 lumens of brightness',
      '50AH x 1 Lithium battery capacity at 12 Volts',
      '6 to 8 hours of continuous battery backup',
      'Telescopic MS rod tower with dual directional heads',
      'Fully waterproof heavy-duty portable case design',
      'Lightweight 25 kg construction with convenient transport wheels'
    ],
    highlights: [
      {
        title: 'Portable Illumination',
        items: [
          'Instant deployment for emergency response, railway repairs, and night maintenance',
          'No engine noise, no exhaust fumes, completely safe for indoor or tunnel use'
        ]
      }
    ],
    variants: ['ace-b-04', 'ace-b-01', 'ace-plt-4000']
  },

  'ace-b-01': {
    id: 'ace-b-01',
    title: 'ACE B -01',
    category: 'battery',
    categoryName: 'Battery Operated',
    tagline: 'Ultra-Compact 5,000 Lumens Portable Light Tower',
    description: 'At Ariselux, we pride ourselves on delivering high-quality, energy-efficient lighting solutions that stand the test of time. Our LED Flood Light is designed to provide exceptional brightness, durability, and performance for a wide range of outdoor and industrial applications with 8-9 hours battery backup and ultra-light 12 kg weight.',
    image: '/images/products/Battery oprated/b01-angle1.jpg',
    gallery: [
      '/images/products/Battery oprated/b01-angle1.jpg',
      '/images/products/Battery oprated/b01-angle2.jpg',
      '/images/products/Battery oprated/b01-angle3.jpg'
    ],
    featureImage: '/images/industries/events.jpg',
    quickSpecs: {
      mastHeight: { title: 'Tower height', value: '5 ft (1.0 - 1.5 MTR)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '1 x 50W LED (5,000 Lumens)', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '8 - 9 Hours Battery Backup', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '800 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: 'Rechargeable 12 Volts Battery System',
        generator: 'Solid-State Battery Circuit with Protection',
        tankSize: '8 - 9 Hours Battery Backup',
        sockets: '50 W Light Power | Brightness: 5000 Lumens',
        weight: '12 KG Approx Weight (Compact Tactical Case)',
        dimensions: 'Tower Height: 1 - 1.5 Meter Telescopic MS Rod Tower\nTravel: 0.45 x 0.3 x 0.5 m | Operation: 0.6 x 0.6 x 1.5 m'
      }
    ],
    features: [
      '5,000 lumens brightness from high-output 50W LED fixture',
      'Extended 8 to 9 hours of battery backup time',
      'Rechargeable 12 Volts battery system',
      '1 to 1.5-meter telescopic MS rod tower',
      'Ultra-compact 12 kg approximate weight, easily carried with one hand',
      'Heavy-duty tactical case enclosure with integrated carry handle'
    ],
    highlights: [
      {
        title: 'Grab-and-Go Portability',
        items: [
          'Ultra-compact form factor fits easily in vehicle footwells or small toolboxes',
          'Instant one-switch illumination for night patrol, security, and quick repairs'
        ]
      }
    ],
    variants: ['ace-b-02', 'ace-b-04', 'ace-1-2-it-4500']
  },

  // Legacy alias for qube-power-max
  'qube-power-max': {
    id: 'qube-power-max',
    title: 'ACE LT 12000 (Qube Power Max)',
    category: 'diesel',
    categoryName: 'Diesel Powered',
    tagline: 'Heavy-Duty Industrial Diesel Lighting Tower',
    description: 'Ariselux Equipment Company proudly presents its advanced LED Flood Light solution - engineered for maximum brightness, energy efficiency, and durability. Powered by an Escort Kubota diesel engine and 12-meter mast delivering 240,000 lumens.',
    image: '/images/products/Diesel oprated/diesel-angle1.jpg',
    gallery: [
      '/images/products/Diesel oprated/diesel-angle1.jpg',
      '/images/products/Diesel oprated/diesel-angle2.jpg',
      '/images/products/Diesel oprated/diesel-angle3.jpg'
    ],
    featureImage: '/images/industries/events.jpg',
    quickSpecs: {
      mastHeight: { title: 'Mast height', value: '39 ft (12 m)', icon: '/images/icons/mast-height.svg' },
      light: { title: 'Light', value: '4 x 420W / 500W LED', icon: '/images/icons/led-light.svg' },
      runtime: { title: 'Runtime', value: '80+ hours', icon: '/images/icons/runtime-in-hours.svg' },
      coverage: { title: 'Light coverage', value: '8000 sq. m', icon: '/images/icons/light-coverage.svg' }
    },
    tableSpecs: [
      {
        engine: 'Escort Kubota 14.5 HP Water-Cooled Diesel',
        generator: '220 Volts Connection Board Output',
        tankSize: '100 Liters (Diesel)',
        sockets: 'Weatherproof Output Sockets',
        weight: '600 - 700 KG',
        dimensions: 'Travel: 2.3 x 1.4 x 2.4 m\nOperation: 2.6 x 2.4 x 12.0 m'
      }
    ],
    features: [
      '240,000 lumens total brightness',
      'Japanese Escort Kubota 14.5 HP engine',
      '12-meter telescopic mast'
    ],
    highlights: [
      {
        title: 'Lights',
        items: ['High-efficacy modular LED floodlights delivering up to 2,40,000 lumens']
      }
    ],
    variants: ['ace-lt-12000', 'ace-lt-9000', 'ace-lt-6000']
  }
};

// Backward compatibility aliases
productsData['ace-2-slt-6000'] = productsData['ace-5-slt-6000'];
productsData['ace-1-3-slt-6000'] = productsData['ace-3-slt-6000'];
productsData['ace-0-5-slt-4000'] = productsData['ace-3-slt-6000'];
