(function(){
'use strict';
// Dados ficam só em variáveis na memória: nada vai ao localStorage, cookies ou servidor.
var FORNECEDORES=[
 {nome:'Quem Fornece',url:'https://quemfornece.com/',cat:'Diretório de fornecedores',desc:'Diretório para pesquisar empresas e possíveis fornecedores de diferentes setores.',btn:'CONHECER FORNECEDORES',cor:'#2b4eff'},
 {nome:'Sebrae',url:'https://www.sebrae.com.br/',cat:'Apoio empresarial e negócios',desc:'Portal de apoio a pequenos negócios, com orientações empresariais e oportunidades de relacionamento comercial.',btn:'ACESSAR SEBRAE',cor:'#0a7ea4'},
 {nome:'Inventa',url:'https://www.inventa.shop/',cat:'Atacado e revenda',desc:'Plataforma voltada ao comércio entre marcas e lojistas, sujeita à disponibilidade atual de serviços e condições comerciais.',btn:'CONHECER PLATAFORMA',cor:'#7a3cff'},
 {nome:'Alibaba',url:'https://www.alibaba.com/',cat:'Fornecedores internacionais',desc:'Marketplace internacional para pesquisar fabricantes, distribuidores e produtos para compras empresariais.',btn:'EXPLORAR PRODUTOS',cor:'#d9480f'},
 {nome:'Casa dos Dados',url:'https://casadosdados.com.br/',cat:'Pesquisa de empresas e dados cadastrais',desc:'Plataforma de consulta de informações cadastrais de empresas brasileiras. Pode ajudar na pesquisa e verificação inicial de empresas, mas não é necessariamente uma fornecedora de mercadorias.',btn:'CONSULTAR EMPRESAS',cor:'#1b7f5a'}
];
var $=function(s){return document.querySelector(s)};
var form=$('#form'),nome=$('#nome'),contato=$('#contato');
var catAtiva='Todas';

function norm(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
function erro(el,msg){var e=$('#e-'+el.id);e.textContent=msg;el.setAttribute('aria-invalid',msg?'true':'false')}

function validar(){
 var ok=true,n=nome.value.trim().replace(/\s+/g,' '),c=contato.value.trim();
 if(!n){erro(nome,'Informe seu nome completo.');ok=false}
 else if(n.split(' ').length<2||n.length<5||!/^[\p{L}][\p{L}' .-]+$/u.test(n)){erro(nome,'Digite nome e sobrenome, usando só letras.');ok=false}
 else erro(nome,'');
 var email=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c);
 var d=c.replace(/\D/g,''),tel=/^[\d\s()+-]+$/.test(c)&&(d.length===10||d.length===11||((d.length===12||d.length===13)&&d.indexOf('55')===0));
 if(!c){erro(contato,'Informe um e-mail ou telefone.');ok=false}
 else if(!email&&!tel){erro(contato,'Use um e-mail válido ou telefone com DDD.');ok=false}
 else erro(contato,'');
 if(!ok)(nome.getAttribute('aria-invalid')==='true'?nome:contato).focus();
 return ok?n:null;
}
[nome,contato].forEach(function(i){i.addEventListener('input',function(){if(i.getAttribute('aria-invalid')==='true')erro(i,'')})});

function confete(){
 var b=$('#burst'),cores=['#ffb703','#2b4eff','#fff','#6f8bff'];b.innerHTML='';
 for(var i=0;i<36;i++){var p=document.createElement('i'),a=Math.random()*6.28,d=110+Math.random()*130;
  p.className='p';p.style.background=cores[i%4];
  p.style.setProperty('--x',Math.cos(a)*d+'px');p.style.setProperty('--y',Math.sin(a)*d+'px');p.style.setProperty('--rot',Math.random()*540+'deg');
  p.style.animationDelay=(0.8+Math.random()*.3)+'s';b.appendChild(p)}
}
var timer;
function entrar(primeiro){
 $('#hello').textContent='Olá, '+primeiro+'! Que bom ter você aqui.';
 $('#ok').hidden=true;$('#gate').hidden=true;$('#site').hidden=false;window.scrollTo(0,0);clearTimeout(timer);
}
form.addEventListener('submit',function(e){
 e.preventDefault();var n=validar();if(!n)return;
 var primeiro=n.split(' ')[0];primeiro=primeiro.charAt(0).toUpperCase()+primeiro.slice(1).toLowerCase();
 $('#ok').hidden=false;confete();
 timer=setTimeout(function(){entrar(primeiro)},2600);
 $('#skip').onclick=function(){entrar(primeiro)};$('#skip').focus();
 form.reset(); // limpa os campos; nada foi guardado
});

/* cartões */
function render(){
 var q=norm($('#busca').value.trim()),g=$('#grid');g.innerHTML='';var n=0;
 FORNECEDORES.forEach(function(f){
  if(catAtiva!=='Todas'&&f.cat!==catAtiva)return;
  if(q&&norm(f.nome+' '+f.cat+' '+f.desc).indexOf(q)<0)return;
  n++;var c=document.createElement('article');c.className='card';
  c.innerHTML='<div class="mono" style="background:'+f.cor+'" aria-hidden="true">'+f.nome.charAt(0)+'</div><h3></h3><p class="cat"></p><p class="d"></p><a class="go" target="_blank" rel="noopener noreferrer"></a>';
  c.querySelector('h3').textContent=f.nome;c.querySelector('.cat').textContent=f.cat;c.querySelector('.d').textContent=f.desc;
  var a=c.querySelector('.go');a.href=f.url;a.textContent=f.btn;a.setAttribute('aria-label',f.btn+' (abre '+f.nome+' em nova aba)');
  g.appendChild(c)});
 $('#vazio').hidden=n>0;$('#count').textContent=n+(n===1?' plataforma encontrada':' plataformas encontradas');
}
function chips(){
 var box=$('#chips'),cats=['Todas'].concat(FORNECEDORES.map(function(f){return f.cat}));
 cats.forEach(function(c){var b=document.createElement('button');b.type='button';b.className='chip';b.textContent=c;b.setAttribute('aria-pressed',c==='Todas');
  b.onclick=function(){catAtiva=c;box.querySelectorAll('.chip').forEach(function(x){x.setAttribute('aria-pressed',x===b)});render()};box.appendChild(b)});
}
$('#busca').addEventListener('input',render);
chips();render();

/* menu, topo, privacidade */
var burger=$('#burger'),menu=$('#menu');
burger.onclick=function(){var o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)};
menu.addEventListener('click',function(e){if(e.target.tagName==='A'){menu.classList.remove('open');burger.setAttribute('aria-expanded','false')}});
var top=$('#top');window.addEventListener('scroll',function(){top.hidden=window.scrollY<500});
top.onclick=function(){window.scrollTo({top:0,behavior:'smooth'})};
document.querySelector('[data-priv]').addEventListener('click',function(e){
 e.preventDefault();$('#gate').hidden=true;$('#site').hidden=false;$('#hello').textContent='Bem-vindo(a)!';
 setTimeout(function(){$('#privacidade').scrollIntoView()},30)});
$('#ano').textContent=new Date().getFullYear();
})();
