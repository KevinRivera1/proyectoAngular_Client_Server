import { Column, CreateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne, UpdateDateColumn } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";
import { RolesEntity } from "./roles.model";

@Entity('products', { schema: 'ventasbdd' })

export class UsuarioEntity {

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

    @Column('number', {
        name: 'cedula',
        unique: true,
        comment: 'cedula usuario',
    })
    cedula: number;

    @Column('varchar', {
        name: 'nombre',
        comment: 'nombre del usuario',
    })
    nombre: string;

    @Column('varchar', {
        name: 'apellido',
        comment: 'apellido del usuario',
    })
    apellido: string;

    @Column('number', {
        name: 'telefono',
        unique: true,
        comment: 'telefono del usuario',
    })
    telefono: number;

    @Column('varchar', {
        name: 'direccion',
        comment: 'direccion del usuario',
    })
    direccion: string;

    @Column('varchar', {
        name: 'email',
        comment: 'email del usuario',
    })
    email: string;

    @Column('varchar', {
        name: 'password',
        unique: true,
        comment: 'password del usuario',
    })
    password: string;

    @ManyToOne(() => RolesEntity, (roles) => roles.usuario)
    @JoinColumn({ name: 'usuario_id' })
    roles: RolesEntity;

}

