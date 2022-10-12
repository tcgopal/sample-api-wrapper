export const cargosonApi = {
    id: 739027,
    customer_reference: 'test-ref-123',
    collection_company_name: 'Cargoson Latvia',
    //company_name -> company
    collection_address_row_1: 'Dārzciema iela 60', //company_name -> address
    collection_address_row_2: '', //company_name -> address
    collection_postcode: '45365', //company_name -> address -> pinched
    collection_city: 'Rīga', //company_name -> address -> city
    collection_country: 'LV', //company_name -> address -> city
    collection_contact_name: 'Test Person', //company_name -> primary_contact_person
    collection_contact_phone: '+37166789012', //company_name -> primary_contact_person
    collection_contact_email: 'rasmus@demo.example.com', //company_name -> primary_contact_person
    delivery_company_name: 'Demo Latvia OÜ',
    delivery_address_row_1: 'Kuldnoka 4',
    delivery_address_row_2: '',
    delivery_postcode: '10619',
    delivery_city: 'Tallinn',
    delivery_country: 'EE',
    delivery_contact_name: 'Johannes Kurvits',
    delivery_contact_phone: '+37255551234',
    delivery_contact_email: '',
    frigo: false,
    temp_min: null,
    temp_max: null,
    adr: true,
    collection_date: '2022-09-12',
    collection_time_from: '2000-01-01T08:00:00.000Z', //origin -> pickup_date
    collection_time_to: '2000-01-01T15:00:00.000Z', //origin -> departure_date
    delivery_date: null,
    delivery_time_from: '2000-01-01T00:00:00.000Z', //destination -> arrival_date
    delivery_time_to: '2000-01-01T00:00:00.000Z', //destination -> delivered_date
    incoterm_code: 'FCA', //shipment_term (reference field)
    incoterm_city: 'Rīga',
    author_comment: null,
    author_company: 'Klavis OÜ',
    author_name: 'Siim Taliaru',
    author_phone: '+372 5555 5555',
    author_email: 'siim@vm.example.com',
    created_at: '2022-09-07T11:02:07.060+03:00',
    updated_at: '2022-09-07T11:02:07.701+03:00',
    collection_comment: 'Collection comment example TEST!', //pickup_notes
    delivery_comment: 'Delivery comment example TEST!', //delivery_notes
    customer_remark: 'remarks for the carrier TEST',
    carrier_remark: null,
    collection_with_tail_lift: false,
    collection_prenotification: false,
    delivery_with_tail_lift: false,
    delivery_prenotification: false,
    registration_plate: null,
    freight_payer_company_name: null,
    freight_payer_address_row_1: null,
    freight_payer_address_row_2: null,
    freight_payer_postcode: null,
    freight_payer_city: null,
    freight_payer_country: null,
    freight_payer_contact_name: null,
    freight_payer_contact_phone: null,
    freight_payer_contact_email: '',
    freight_payer_comment: null,
    reference: 'CH39025', //order_ref_no
    freight_payer_code: null,
    goods_value_cents: 800,
    goods_value_currency: 'EUR',
    delivery_return_document: false,
    delivery_to_private_person: false,
    distance_road: 305,
    distance_gcd: 278,
    distance_sea_ship: 356,
    distance_sea_truck: 17,
    search_field: null,
    rows: [
      //__cache -> loads -> reference field
      {
        quantity: 1,
        package_type: 'EUR',
        weight: '1000.0',
        cbm: '0.0',
        length: 120,
        width: 80,
        height: null,
        ldm: '0.4',
        description: 'Goods NOT on an EUR pallet',
        adr_rows: [
          {
            adr_un: '1231',
            adr_group: 'II',
            adr_class: '3',
            adr_neq: '200',
            adr_description: 'METHYL ACETATE¥r¥nTunnel code: D/E¥r¥nHIN: 30',
            adr_limited_quantity: false,
          },
        ],
      },
    ],
    offer: {
      total_price: '0,00',
      source_of_price: 'direct',
      currency: 'EUR',
      transit_time: '',
      estimated_collection_date: '',
      estimated_delivery_date: '',
      service: {
        name: 'Kuller',
        type: 'courier',
        code: 'COUR3',
        carrier: {
          name: 'DPD Eesti AS',
          short_name: 'DPD Eesti',
          address_1: 'Taevavärava tee 1',
          address_2: 'Lehmja küla',
          country: 'EE',
          city: 'Rae',
          postcode: '75306',
        },
      },
    },
    carrier: {
      // carrier -> reference field
      name: 'DPD Eesti AS',
      short_name: 'DPD Eesti',
      address_1: 'Taevavärava tee 1',
      address_2: 'Lehmja küla',
      country: 'EE',
      city: 'Rae',
      postcode: '75306',
    },
    consignor: {
      //shipper_name -> reference field
      name: 'Cargoson Latvia',
      address_1: 'Dārzciema iela 60',
      address_2: '',
      postcode: '45365',
      postcode_formatted: 'LV-45365',
      city: 'Rīga',
      country: 'LV',
      country_name: 'Latvia',
      communication_country: 'LV',
      contact_name: 'Test Person',
      contact_phone: '+37166789012',
      contact_email: 'rasmus@demo.example.com',
    },
    consignee: {
      //consignee_name -> reference field
      name: 'Klavis OÜ',
      address_1: 'Jälgimäe tee 11',
      address_2: 'Harjumaa',
      postcode: '76406',
      postcode_formatted: '76406',
      city: 'Saku vald',
      country: 'EE',
      country_name: 'Estonia',
      communication_country: 'EE',
      contact_name: 'Siim Taliaru',
      contact_phone: '+372 5555 5555',
      contact_email: 'siim@vm.example.com',
    },
  };
  