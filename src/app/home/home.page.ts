import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public categorias = [
    { codigo: 1, nome: 'Pizzas'    },
    { codigo: 2, nome: 'Burguers'  },
    { codigo: 3, nome: 'Assados'   },
    { codigo: 4, nome: 'Cachorrão' }
  ]

  public slideOpts = {
    slidesPerView: 2
  }

  public produtos = [
    { codigo: 1, categoria: 3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', nome: 'Croissant 3 queijos',         valor: 9.99, imagens: ['croi-1-1.jpg', 'croi-1-2.jpg'], visibled: false },
    { codigo: 2, categoria: 3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', nome: 'Croissant frango',            valor: 9.99, imagens: ['croi-2-1.jpg', 'croi-2-2.jpg'], visibled: false },
    { codigo: 3, categoria: 3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', nome: 'Croissant presunto e queijo', valor: 9.99, imagens: ['croi-3-1.jpg', 'croi-3-2.jpg'], visibled: false },
    { codigo: 4, categoria: 3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', nome: 'Coxinha de frango',           valor: 5.90, imagens: ['cox-1-1.jpg' , 'cox-1-2.jpg' ], visibled: false },
    { codigo: 5, categoria: 3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', nome: 'Esfirra de carne',            valor: 6.90, imagens: ['esf-1-1.jpg' , 'esf-1-2.jpg' ], visibled: false },
    { codigo: 6, categoria: 1, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', nome: 'Frango com catupiry',         valor: 49.90, imagens: ['piz-1-1.jpg' , 'piz-1-2.jpg' ], visibled: false },
    { codigo: 7, categoria: 1, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', nome: 'Strogonoff de frango',        valor: 55.90, imagens: ['piz-2-1.jpg' , 'piz-2-2.jpg' ], visibled: false },
    { codigo: 8, categoria: 1, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', nome: 'Strogonoff de carne',         valor: 55.90, imagens: ['piz-3-1.jpg' , 'piz-3-2.jpg' ], visibled: false },
    { codigo: 9, categoria: 1, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', nome: 'Quatro queijos',              valor: 40.90, imagens: ['piz-4-1.jpg' , 'piz-4-2.jpg' ], visibled: false },
    { codigo: 10, categoria: 2, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', nome: 'Hambúrguer de costela',      valor: 25.00, imagens: ['ham-1-1.jpg' , 'ham-1-2.jpg' ], visibled: false },
    { codigo: 11, categoria: 2, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', nome: 'Hambúrguer com cheddar',     valor: 23.99, imagens: ['ham-2-1.jpg' , 'ham-2-2.jpg' ], visibled: false },
    { codigo: 12, categoria: 2, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', nome: 'Hambúrguer americano',       valor: 19.99, imagens: ['ham-3-1.jpg' , 'ham-3-2.jpg' ], visibled: false },
    { codigo: 13, categoria: 4, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', nome: 'Simples',                    valor: 10.00, imagens: ['dog-1-1.jpg' , 'dog-1-2.jpg' ], visibled: false },
    { codigo: 14, categoria: 4, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', nome: 'Duplo',                      valor: 12.00, imagens: ['dog-2-1.jpg' , 'dog-2-2.jpg' ], visibled: false },
    { codigo: 15, categoria: 4, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', nome: 'Cachorrão de frango',        valor: 18.00, imagens: ['dog-3-1.jpg' , 'dog-3-2.jpg' ], visibled: false },
    { codigo: 16, categoria: 4, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', nome: 'Cachorrão de calabresa',     valor: 18.00, imagens: ['dog-4-1.jpg' , 'dog-4-2.jpg' ], visibled: false },
    { codigo: 17, categoria: 4, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', nome: 'Cachorrão de bacon',         valor: 18.00, imagens: ['dog-5-1.jpg' , 'dog-5-2.jpg' ], visibled: false }
  ]

  public pathImgs = '../../assets/img/';

  public selected = 0;

  constructor(private navCtrl: NavController) {
    this.setSelected(1);
  }

  public formataValor(valor) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  public setSelected(codigoCategoria) {
    this.selected = codigoCategoria;

    this.produtos.map(el => el.visibled = false);

    this.produtos
    .filter(el => el.categoria == this.selected)
    .map(el => el.visibled = true);
  }

  public goProduto(produto) {
    this.navCtrl.navigateForward('produto', {
      queryParams: { produto: produto }
    });
  }

}
