import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable} from 'typeorm';
import { cliente } from "./cliente"
import { vendedor } from "./vendedor"
import { producto } from "./producto"

@Entity()
export class cabecera_factura {
  
  @PrimaryColumn({type:'int', unique:true})
  Numero: number;

  @Column({type:'date', nullable:true, })
  fecha: Date;

  @ManyToOne(() => cliente, cliente => cliente.Ruc_cliente)
  @JoinColumn({ name: 'Ruc_cliente' })
  cliente: cliente;

  @ManyToOne(() => vendedor, vendedor => vendedor.Celular_vendedor)
  @JoinColumn({ name: ' Codigo_vendedor' })
  vendedor: vendedor;

  //@ManyToMany(() => producto, producto => producto.Codigo_producto)
  //@JoinColumn({ name: 'Codigo_producto' })
  //producto: producto;
  @ManyToMany(() => producto)
  @JoinTable({
    name: 'detalle_factura',
    joinColumn: { name: 'Numero', referencedColumnName: 'Numero' },
    inverseJoinColumn: { name: 'Codigo_producto', referencedColumnName: 'Codigo_producto' }
  })
  productos: producto[];
}
