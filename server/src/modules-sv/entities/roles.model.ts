import { Column, CreateDateColumn, DeleteDateColumn, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.model";
import { UsuarioEntity } from "./usuario.model";

export class RolesEntity {

    @PrimaryGeneratedColumn('identity')
    id: string;

    @CreateDateColumn({
        //objeto
        name: 'create_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })

    createAT: Date;//atributo

    @UpdateDateColumn({
        name: 'create_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    updateAt: Date;

    @DeleteDateColumn({
        name: 'create_at',
        type: 'timestamptz',
        nullable: true,
    })

    @Column('varchar', {
        name: 'nomRol',
        unique: true,
        comment: 'nombre del rol',
    })
    nomRol: string;

    @Column('varchar', {
        name: 'permisos',
        unique: true,
        comment: 'permisos del rol',
    })
    permisos: string;

    @Column('varchar', {
        name: 'descripcion',
        comment: 'descripcion del rol',
    })
    descripcion: string;


    @OneToMany(() => UsuarioEntity, (usuario) => usuario.roles)
    @JoinColumn({ name: 'usuario_id' })
    usuario: UsuarioEntity;

}