package test;

import static org.junit.Assert.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import entities.Todo;
import entities.User;

public class EntityTest {
	
	private EntityManagerFactory emf = null;
	
	private EntityManager em = null;
	
	@Before
	public void set_up() { 
		emf = Persistence.createEntityManagerFactory("YourPU");
		em = emf.createEntityManager();
	}
	
	@After
	public void tear_down() { 
		em.close();
		emf.close();
	}
	
	@Test
	public void testEntities() {
		assertNotNull(em.find(Todo.class, 1));
		assertNotNull(em.find(User.class, 1));
	}

}
