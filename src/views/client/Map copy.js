import React, { useEffect, useRef } from 'react'
import { axios, localhost } from '../../other/utils/axios/axios'
// import axios from 'axios';



const Location = (p) => {

  const disable = useRef(false)

  useEffect(() => {

    //! map
    let latlng = { lat: p.latlng.lat, lng: p.latlng.lng },
      map = L.map('map', { center: latlng, zoom: 17, })
    var myIcon = L.icon({ iconUrl: `${localhost}/images/mark.png`, iconSize: [38, 95], iconAnchor: [22, 94], popupAnchor: [-3, -76], shadowSize: [68, 95], shadowAnchor: [22, 94], });
    let markerOption = { draggable: true, icon: myIcon }
    let marker = L.marker(latlng, markerOption).addTo(map)
    map.on('click', (ev) => { marker.openPopup() })
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);
    //! map


    //! onload
    const street = 'شهر تهران بخش مرکزی شهرستان تهران'
    marker.bindPopup(street).openPopup()
    marker.bindPopup(street).openPopup()
    //! onload


    //! map dragstart
    map.on('dragstart', async (ev) => {
      disable.current = true
      document.getElementById('bottomDiv').style.display = 'flex'
    });
    //! map dragstart


    //! marker dragstart
    marker.on('dragstart', async (ev) => {
      disable.current = true
      document.getElementById('bottomDiv').style.display = 'flex'
    });
    //! marker dragstart


    //! marker dragend
    marker.on('dragend', async (ev) => {
      map.setView({ lat: ev.target._latlng.lat, lng: ev.target._latlng.lng })
      const { data, status } = await axios.post(`${localhost}/reverse`, JSON.stringify({ lat: ev.target._latlng.lat, lng: ev.target._latlng.lng }), { headers: { 'Content-Type': 'application/json' } })
      if (status) {
        if (data[0]) {
          const one = (data[0].streetName && data[0].streetName !== data[0].formattedAddress.split(",")[0]) ? data[0].streetName : ''
          const two = data[0].formattedAddress.split(",")[0] ? data[0].formattedAddress.split(",")[0] : ''
          const three = data[0].formattedAddress.split(",")[1] ? data[0].formattedAddress.split(",")[1] : ''
          const street = one + ' ' + two + ' ' + three

          marker.bindPopup(street).openPopup()
          disable.current = false

        }
      }
    });
    //! marker dragend


    //! searching
    const searching = async () => {
      const { data, status } = await axios.post(`${localhost}/geocode`, { loc: 'تهران' + ' ' + document.getElementById('inputSearch').value })
      if (status) {
        if (data[0]) {
          const one = (data[0].streetName && data[0].streetName !== data[0].formattedAddress.split(",")[0]) ? data[0].streetName : ''
          const two = data[0].formattedAddress.split(",")[0] ? data[0].formattedAddress.split(",")[0] : ''
          const three = data[0].formattedAddress.split(",")[1] ? data[0].formattedAddress.split(",")[1] : ''
          const street = one + ' ' + two + ' ' + three
          map.setView({ lat: data[0].latitude, lng: data[0].longitude });
          marker.setLatLng({ lat: data[0].latitude, lng: data[0].longitude })
          marker.bindPopup(street.trim() ? street : '!پیدا نشد').openPopup()
        }
        else {
          marker.bindPopup('!پیدا نشد ').openPopup()
        }
      }
    }

    document.getElementById('formSearch').onsubmit = (event) => { if (event) event.preventDefault(); searching() }
    document.getElementById('searching').onclick = () => searching()
    //! searching


    //! getUserLocation
    function onLocationError(e) { alert('نتوانست موقعیت مکانیتان را پیدا کند'); }
    async function onLocationFound(e) {
      (async () => {
        const { data, status } = await axios.post(`${localhost}/reverse`, e.latlng, { headers: { 'Content-Type': 'application/json' } })
        if (status) {
          if (data[0]) {
            const one = (data[0].streetName && data[0].streetName !== data[0].formattedAddress.split(",")[0]) ? data[0].streetName : ''
            const two = data[0].formattedAddress.split(",")[0] ? data[0].formattedAddress.split(",")[0] : ''
            const three = data[0].formattedAddress.split(",")[1] ? data[0].formattedAddress.split(",")[1] : ''
            const street = one + ' ' + two + ' ' + three
            marker.bindPopup(street).openPopup()
            setTimeout(() => { marker.bindPopup(street).openPopup() }, 500)
            document.getElementById('bottomDiv').style.display = 'none'
            map.stopLocate()
          }
        }
      })()
    }
    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);
    map.locate({ watch: false, setView: true })
    //* watch برای اینه که دنبالش کنه یا نه
    //! getUserLocation


    return () => { map.stopLocate() }

  }, [])

  return (
    <div style={{ width: '100%', height: '100%' }}>

      <div style={{ display: 'flex', position: 'absolute', justifyContent: 'flex-end', height: 'auto', zIndex: 11111, top: 1 }}>
        <form id="formSearch"
          style={{ width: 200, margin: ' 3px 2px 0 0', display: 'flex', flexDirection: 'row', alignItems: ' flex-end', }}>
          <input type="text" placeholder="مناطق تهران را جستجو کنید" id='inputSearch' style={{ borderTopRightRadius: 3, borderBottomRightRadius: 3, textAlign: 'right', border: '1px solid rgb(150, 146, 146)', display: 'block', flexGrow: 1, height: 30, position: 'relative', zIndex: 1000, paddingRight: 5, fontSize: 12 }} />
          <i className="fa fa-search" id='searching' style={{ cursor: 'pointer', borderTopLeftRadius: 3, borderBottomLeftRadius: 3, border: '1px solid rgb(150, 146, 146)', borderRightWidth: 0, backgroundColor: '#fff', fontSize: 15, display: 'block', height: 30, width: 30, position: 'relative', zIndex: 1000, boxSizing: 'border-box', }}>
            <span style={{ display: 'flex', alignItems: 'center', transform: 'rotate(-45deg)', marginTop:13, marginLeft:-9 }} >
              <span style={{ border: '3px solid black', height: 8, width: 8, borderRadius: '50%' }} />
              <span style={{ background: 'black', height: 3.5, width: 7 }} />
            </span>
          </i>
        </form>
      </div>

      <div id="map" style={{ width: '100%', height: 'calc(99vh)', position: 'fixed', bottom: 0, left: 0 }}></div>

      <div id='bottomDiv' style={{ display: 'flex', flexDirection: 'row', visibility: 'visible', zIndex: 10000, position: 'fixed', bottom: 0, width: '100%', height: 42, background: '#fff', padding: '6px 5px 0px', boxSizing: 'border-box' }}>
        <button disabled={disable.current} id='btnPayment' onClick={() => p.navigation.navigate('SetAddressInTehran')} style={{ display: 'block', border: '1px solid #07f', background: "#fff", color: '#07f', height: '30px', width: '90%', margin: '0 auto', fontSize: '16px', borderRadius: '5px', cursor: 'pointer' }} >تایید</button>
      </div>

    </div>
  );
}

export default Location;