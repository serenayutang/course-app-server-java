package com.example.wbdvsp2102serenayutangserverjava.services;
import com.example.wbdvsp2102serenayutangserverjava.models.Widget;
import com.example.wbdvsp2102serenayutangserverjava.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class WidgetService {

  @Autowired
  WidgetRepository repository;

//  private List<Widget> widgets = new ArrayList<>();
//  {
//    Widget w1 = new Widget(111l, "ABC111", "HEADING", 1, "Welcome to Widgets");
//    Widget w2 = new Widget(222l, "ABC222", "PARAGRAPH", 1, "This is a paragraph");
//    Widget w3 = new Widget(333l, "ABC333", "HEADING", 2, "Welcome to WebDev");
//    Widget w4 = new Widget(444l, "ABC444", "PARAGRAPH", 1, "Lorem ipsum");
//    widgets.add(w1);
//    widgets.add(w2);
//    widgets.add(w3);
//    widgets.add(w4);
//  }

  // implement crud operations
  public Widget createWidgetForTopic(Widget widget) {
    return repository.save(widget);
//    Long id = (new Date()).getTime();
//    widget.setId(id);
//    widgets.add(widget);
//    return widget;
  }
  public List<Widget> findAllWidgets() {
    return repository.findAllWidgets();
//    return (List<Widget>) repository.findAll();
//    return widgets;
  }
  public List<Widget> findWidgetsForTopic(String topicId) {
    return repository.findWidgetsForTopic(topicId);
//    List<Widget> ws = new ArrayList<Widget>();
//    for(Widget w: widgets) {
//      if(w.getTopicId().equals(topicId)) {
//        ws.add(w);
//      }
//    }
//    return ws;
  }
  public Widget findWidgetById(Long id) {
    return repository.findWidgetsById(id);
//    return repository.findById(id).get();
//    for(Widget w: widgets) {
//      if(w.getId().equals(id)) {
//        return w;
//      }
//    }
//    return null;
  }
  public Integer updateWidget(Long id, Widget newWidget) {
    Widget originalWidget = repository.findById(id).get();
    //TODO: copy all the other fields testing for null
    originalWidget.setType(newWidget.getType());
    originalWidget.setSize(newWidget.getSize());
    originalWidget.setText(newWidget.getText());
    //IMAGE
    originalWidget.setUrl(newWidget.getUrl());
    originalWidget.setWidth(newWidget.getWidth());
    originalWidget.setHeight(newWidget.getHeight());
    //LIST
    originalWidget.setOrdered(newWidget.getOrdered());

    repository.save(originalWidget);
    return 1;
//    for(int i=0; i<widgets.size(); i++) {
//      Widget w = widgets.get(i);
//      if(w.getId().equals(id)) {
//        widgets.set(i, newWidget);
//        return 1;
//      }
//    }
//    return -1;
  }
  public Integer deleteWidget(Long id) {
    repository.deleteById(id);
    return 1;
//    int index = -1;
//    for(int i=0; i<widgets.size(); i++) {
//      Widget w = widgets.get(i);
//      if(w.getId().equals(id)) {
//        index = i;
//      }
//    }
//    if(index >= 0) {
//      widgets.remove(index);
//      return 1;
//    }
//    return -1;
  }
}
