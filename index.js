import { cargosonApi } from './Cargoson-api.js';

import { ShipthisAPI } from 'shipthisapi-js';

let param = {
  userType: 'employee',
  organisationId: 'demo',
  xApiKey:
    'WyJhc2hpc2hrbXIyMjEwQGdtYWlsLmNvbSIsImRlbW8iXQ.Yxb3BQ.P6RFy5SNBOHaktPtS1JmmD9Jfu8',
};
let shipthisApi = new ShipthisAPI(param);
await shipthisApi
  .connect()
  .then((data) => console.log(data))
  .catch((err) => err.message);

  const createNewCustomer = {
    "__scp": {},
    "opening_balance": {},
    "account_contact_person": {
        "same_as_primary": false,
        "additional_emails": [],
        "enable_portal_access": false
    },
    "company": {
        "is_agent": false,
        "name": "Corgoson lativaaaaaaa",
        "phone": "93848928993",
        "client_code": "12334"
    },
    "primary_contact_person": {
        "additional_emails": [],
        "enable_portal_access": false,
        "first_name": "shendue",
        "last_name": "dneundure",
        "name": "Dneundure",
        "email": "cargoson@gmail.com"
    },
    "address": {
        "city": {}
    },
    "__events": {
        "lead__date": {
            "$date": 1665532800000
        },
        "lead__comments": ""
    },
    "accounting": {
        "credit_limit": 0,
        "external_balance": 0,
        "account_credit_block": false,
        "block_reason": "Exceeded Credit Terms",
        "currency": "inr",
    },
    "is_inter_branch": false,
    "need_insurance": false,
    "automatic_ar_reminder": {
        "enable_automatic_reminder": false
    },
    "automatic_ar_aging_reminder": {
        "enable_automatic_reminder": false
    },
    "notification": {
        "sea_shipment": {},
        "air_shipment": {},
        "land_shipment": {},
        "clearance_job": {},
        "documentation_job": {}
    },
    "documents": [],
    "customer_lifecycle": "lead",
    "full_address": "\r\nE :cargoson@gmail.com\r\nT :93848928993",
    "full_address_field_compute": ""
}
const createNew = await shipthisApi.Shipment.addNewCustomer(createNewCustomer)
// const getShipmentTerms = await shipthisApi.Shipment.getShipmentTerms(cargosonApi.incoterm_code);
// const getCarrier = await shipthisApi.Shipment.getLandCarrier("shipthis")
const {items} = await shipthisApi.Shipment.getCustomers(cargosonApi.collection_company_name)
// const getShipperName = await shipthisApi.Shipment.getShipperName(cargosonApi.consignor.name, items[0]._id.$oid)
// const getConsigneeName = await shipthisApi.Shipment.getConsigneeName(cargosonApi.consignee.name, items[0]._id.$oid)
const loc = [cargosonApi.origin.location.bold, cargosonApi.destination.location.bold] 
for(i = 0; i < loc.length; i++){
    loc[i] = await shipthisApi.Shipment.getGoogleLocation(i)
}
const getGoogleLocation = await shipthisApi.Shipment.getGoogleLocation(cargosonApi.origin.location.bold)
const selectLocation = await shipthisApi.Shipment.selectGoogleLocation(getGoogleLocation.items[0].place_id, getGoogleLocation.items[0].description)
// const operation_executive = await shipthisApi.Shipment.getOperationExecutive()
// const vehicleType = await shipthisApi.Shipment.getVehicleType("xyz")
// const packageType = await shipthisApi.Shipment.getPackageType("bundle")
// getCustomers
const object = {
    // shipment: [
    //   {
    //     _cls_: 'land_shipment',
    //     _id: {
    //       $oid: '63455ec020a27e69b38ad3f4',
    //     },
    //   },
    // ],
    description: '',
    __scp: {},
    _auto_generated: '',
    package_quantity: 2,
    total_units: 0,
    weight_unit: 'kg',
    length_unit: 'cm',
    hazard_details: {
      is_hazardous: false,
    },
    vehicle_type: vehicleType.items[0],
    vehicle_no: '',
    marks_and_no: '',
    hs_code: '',
    seal_no: '',
    package_type: packageType.items[0],
  };
const loads = await shipthisApi.Shipment.ltloads(object)
console.log(loads)

const res = shipthisApi.Shipment.createLandShipment(requiredFieldsLand)

console.log(createNew)

const createNewShipper = {
        "__scp": {},
        "company": {
            "party_type": [
                "shipper"
            ],
            "name": "Corgoson Test",
            "phone": "123454566"
        },
        "primary_contact_person": {},
        "account_contact_person": {},
        "address": {
            "city": {}
        },
        "full_address": "",
        "full_address_field": ""
}
export const mapper = {
  job_id: 'LAND000111',
  shipment_class: 'direct',
  customer_name: {},
  shipment_type: 'domestic',
  movement_type: 'door_to_door',
  shipment_term: getShipmentTerms.items[0],
  shipment_name: 'Shipment Description',
  master_shipment_revenue_allocation: 'per_cbm',
  master_shipment_cost_allocation: 'per_cbm',
  enable_automated_tracking: false,
  custom: {},
  order_ref_no: ['CH39025'],
  carrier: getCarrier,
  additional_notes: '',
  release_instruction: '',
  shipper_declared_value: { amount: 0 },
  country_of_origin: {},
  insurance: { need_insurance: false },
  origin: {
    location: loc[0],
    pickup_date: {
      $date: cargosonApi?.collection_time_from,
    },
    departure_date: {
      $date: cargosonApi?.collection_time_to,
    },
  },
  destination: {
    location: loc[1],
    arrival_date: {
      $date: cargosonApi?.delivery_time_from,
    },
    delivered_date: {
      $date: cargosonApi?.delivery_time_to,
    },
  },
  operation_executive: operation_executive.items[0],
  shipper_name: getShipperName.items[0],
  consignee_name: getConsigneeName.items[0],
  shipper_address: cargosonApi.shipper_address,
  consignee_address:cargosonApi.consignee_address,
  pickup_notes: cargosonApi?.collection_comment,
  delivery_notes: cargosonApi.delivery_comment,
  weight_unit: 'kg',
  volume_unit: 'm3',
  pod_documents: [],
  skus: [],
  under_watchlist: false,
  notify_events_via_email: false,
  tags: [],
  documents: [],
  customer_documents: [],
  customer_uploaded_documents: [],
  shipment_status: 'opened',
  job_status: 'open',
  __events: {
    opened__date: {
      $date: 1664496000000,
    },
    opened__comments: '',
  },
  _created_by: '61236f0f34b129c092184e8c', //auto generated
  _last_modified_by: '61236f0f34b129c092184e8c', //auto generated
  _created_by_name: 'test_user', //auto generated
  _last_modified_by_name: 'test_user', //auto generated
  _last_modified_by_email: 'test@shipthis.co', //auto generated
  __cache: {
    loads: {
      //reference fields
      air_loads: [],
      fcl_loads: [],
      ftl_loads: [],
      lcl_loads: [],
      ltl_loads: [
        {
          __deleted: false,
          __import_reference: null,
          __location_id: ['new_york'],
          __region_id: ['usa'],
          __scp: {},
          __status: {},
          __text: 'goods not on an eur pallet xyz pallet(s) kg cm',
          _cls_: 'ltl_load',
          _created_by: '61236f0f34b129c092184e8c',
          _created_by_email: 'yash@shipthis.co',
          _created_by_name: 'Yash',
          _id: {
            $oid: '63380d0149de013acc8c10f9',
          },
          _last_modified_by: '61236f0f34b129c092184e8c',
          _last_modified_by_email: 'test@shipthis.co',
          _last_modified_by_name: 'test_user',
          _last_remark: '',
          _last_update: '',
          cbm: 9.6,
          cft: 339.021,
          created_at: {
            $date: new Date().getTime(),
          },
          description: 'Goods NOT on an EUR pallet',
          hazard_details: {
            is_hazardous: false,
          },
          height: 1000,
          length: 120,
          length_unit: 'cm',
          modified_at: {
            $date: new Date().getTime(),
          },
          package_quantity: 1,
          package_type: packageType.items[0],
          shipment: [
            {
              _cls_: 'land_shipment',
              _id: {
                $oid: '6336fb5ca9982a33deaa267c',
              },
            },
          ],
          total_units: 1000,
          vehicle_type: vehicleType.items[0],
          weight_unit: 'kg',
          width: 80,
        },
      ],
      roro_loads: [],
      stats: {
        container_count: 0,
        container_nos: '',
        container_teu: 0,
        load_mode: 'ltl',
        load_string: 'PALLET(S) X 1',
        package_string: 'PALLET(S) X 1',
        total_chargeable_weight: {
          kg: '',
          lb: '',
          ton: '',
        },
        total_gross_weight: {
          kg: '',
          lb: '',
          ton: '',
        },
        total_package_quantity: 1,
        total_pieces: 1000,
        total_volume: 9.6,
        total_weight: '',
        vehicle_nos: '',
        volume: {
          cbm: 9.6,
          cft: 339.021,
        },
      },
    },
  },
};
