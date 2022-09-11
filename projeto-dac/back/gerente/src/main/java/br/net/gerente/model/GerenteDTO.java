package br.net.gerente.model;

import java.util.Date;

public class GerenteDTO {
	private Long id;
	private String email;
	private String cpf;

	public GerenteDTO(Long id, String email, String cpf) {
		super();
		this.id = id;
		this.email = email;
		this.cpf = cpf;
	}

	public GerenteDTO() {
		super();
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
