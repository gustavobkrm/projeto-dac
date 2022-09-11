package br.net.gerente.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_gerente")
public class Gerente {
	
		@Id
		@GeneratedValue
		@Column(name = "id")
		private Long id;

		@Column(name = "email")
		private String email;
		
		@Column(name = "cpf")
		private String cpf;
		 
		@Column(name = "nome")
		private String nome;
		 


		public Gerente(Long id, String email, String cpf, String nome) {
			super();
			this.id = id;
			this.email = email;
			this.cpf = cpf;
			this.nome = nome;
		}

		public String getNome() {
			return nome;
		}

		public void setNome(String nome) {
			this.nome = nome;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getCpf() {
			return cpf;
		}

		public void setCpf(String cpf) {
			this.cpf = cpf;
		}

	

}
