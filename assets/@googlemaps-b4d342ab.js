import{e as p}from"./fast-deep-equal-099ec698.js";import{S as k}from"./supercluster-6504d485.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function M(i,e){var t={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(t[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(i);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(i,r[s])&&(t[r[s]]=i[r[s]]);return t}class a{static isAdvancedMarkerAvailable(e){return google.maps.marker&&e.getMapCapabilities().isAdvancedMarkersAvailable===!0}static isAdvancedMarker(e){return google.maps.marker&&e instanceof google.maps.marker.AdvancedMarkerElement}static setMap(e,t){this.isAdvancedMarker(e)?e.map=t:e.setMap(t)}static getPosition(e){if(this.isAdvancedMarker(e)){if(e.position){if(e.position instanceof google.maps.LatLng)return e.position;if(e.position.lat&&e.position.lng)return new google.maps.LatLng(e.position.lat,e.position.lng)}return new google.maps.LatLng(null)}return e.getPosition()}static getVisible(e){return this.isAdvancedMarker(e)?!0:e.getVisible()}}class m{constructor({markers:e,position:t}){this.markers=e,t&&(t instanceof google.maps.LatLng?this._position=t:this._position=new google.maps.LatLng(t))}get bounds(){if(this.markers.length===0&&!this._position)return;const e=new google.maps.LatLngBounds(this._position,this._position);for(const t of this.markers)e.extend(a.getPosition(t));return e}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter(e=>a.getVisible(e)).length}push(e){this.markers.push(e)}delete(){this.marker&&(a.setMap(this.marker,null),this.marker=void 0),this.markers.length=0}}class v{constructor({maxZoom:e=16}){this.maxZoom=e}noop({markers:e}){return C(e)}}const C=i=>i.map(t=>new m({position:a.getPosition(t),markers:[t]}));class x extends v{constructor(e){var{maxZoom:t,radius:r=60}=e,s=M(e,["maxZoom","radius"]);super({maxZoom:t}),this.state={zoom:-1},this.superCluster=new k(Object.assign({maxZoom:this.maxZoom,radius:r},s))}calculate(e){let t=!1;const r={zoom:e.map.getZoom()};if(!p(e.markers,this.markers)){t=!0,this.markers=[...e.markers];const s=this.markers.map(n=>{const o=a.getPosition(n);return{type:"Feature",geometry:{type:"Point",coordinates:[o.lng(),o.lat()]},properties:{marker:n}}});this.superCluster.load(s)}return t||(this.state.zoom<=this.maxZoom||r.zoom<=this.maxZoom)&&(t=!p(this.state,r)),this.state=r,t&&(this.clusters=this.cluster(e)),{clusters:this.clusters,changed:t}}cluster({map:e}){return this.superCluster.getClusters([-180,-90,180,90],Math.round(e.getZoom())).map(t=>this.transformCluster(t))}transformCluster({geometry:{coordinates:[e,t]},properties:r}){if(r.cluster)return new m({markers:this.superCluster.getLeaves(r.cluster_id,1/0).map(n=>n.properties.marker),position:{lat:t,lng:e}});const s=r.marker;return new m({markers:[s],position:a.getPosition(s)})}}class b{constructor(e,t){this.markers={sum:e.length};const r=t.map(n=>n.count),s=r.reduce((n,o)=>n+o,0);this.clusters={count:t.length,markers:{mean:s/t.length,sum:s,min:Math.min(...r),max:Math.max(...r)}}}}class y{render({count:e,position:t},r,s){const o=`<svg fill="${e>Math.max(10,r.clusters.markers.mean)?"#ff0000":"#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${e}</text>
</svg>`,c=`Cluster of ${e} markers`,u=Number(google.maps.Marker.MAX_ZINDEX)+e;if(a.isAdvancedMarkerAvailable(s)){const g=new DOMParser().parseFromString(o,"image/svg+xml").documentElement;g.setAttribute("transform","translate(0 25)");const f={map:s,position:t,zIndex:u,title:c,content:g};return new google.maps.marker.AdvancedMarkerElement(f)}const d={position:t,zIndex:u,title:c,icon:{url:`data:image/svg+xml;base64,${btoa(o)}`,anchor:new google.maps.Point(25,25)}};return new google.maps.Marker(d)}}function w(i,e){for(let t in e.prototype)i.prototype[t]=e.prototype[t]}class h{constructor(){w(h,google.maps.OverlayView)}}var l;(function(i){i.CLUSTERING_BEGIN="clusteringbegin",i.CLUSTERING_END="clusteringend",i.CLUSTER_CLICK="click"})(l||(l={}));const L=(i,e,t)=>{t.fitBounds(e.bounds)};class P extends h{constructor({map:e,markers:t=[],algorithmOptions:r={},algorithm:s=new x(r),renderer:n=new y,onClusterClick:o=L}){super(),this.markers=[...t],this.clusters=[],this.algorithm=s,this.renderer=n,this.onClusterClick=o,e&&this.setMap(e)}addMarker(e,t){this.markers.includes(e)||(this.markers.push(e),t||this.render())}addMarkers(e,t){e.forEach(r=>{this.addMarker(r,!0)}),t||this.render()}removeMarker(e,t){const r=this.markers.indexOf(e);return r===-1?!1:(a.setMap(e,null),this.markers.splice(r,1),t||this.render(),!0)}removeMarkers(e,t){let r=!1;return e.forEach(s=>{r=this.removeMarker(s,!0)||r}),r&&!t&&this.render(),r}clearMarkers(e){this.markers.length=0,e||this.render()}render(){const e=this.getMap();if(e instanceof google.maps.Map&&e.getProjection()){google.maps.event.trigger(this,l.CLUSTERING_BEGIN,this);const{clusters:t,changed:r}=this.algorithm.calculate({markers:this.markers,map:e,mapCanvasProjection:this.getProjection()});if(r||r==null){const s=new Set;for(const o of t)o.markers.length==1&&s.add(o.markers[0]);const n=[];for(const o of this.clusters)o.marker!=null&&(o.markers.length==1?s.has(o.marker)||a.setMap(o.marker,null):n.push(o.marker));this.clusters=t,this.renderClusters(),requestAnimationFrame(()=>n.forEach(o=>a.setMap(o,null)))}google.maps.event.trigger(this,l.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach(e=>a.setMap(e,null)),this.clusters.forEach(e=>e.delete()),this.clusters=[]}renderClusters(){const e=new b(this.markers,this.clusters),t=this.getMap();this.clusters.forEach(r=>{r.markers.length===1?r.marker=r.markers[0]:(r.marker=this.renderer.render(r,e,t),r.markers.forEach(s=>a.setMap(s,null)),this.onClusterClick&&r.marker.addListener("click",s=>{google.maps.event.trigger(this,l.CLUSTER_CLICK,r),this.onClusterClick(s,r,t)})),a.setMap(r.marker,t)})}}export{P as M};
